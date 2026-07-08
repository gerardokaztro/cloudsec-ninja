import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { authEnv } from "./env";

const REFRESH_COOKIE_NAME = "cs_cognito_rt";
// cs_session (la sesión propia) ya fuerza re-login a las 8h; no tiene
// sentido que este cookie sobreviva más que la sesión que lo usa, aunque
// Cognito emita el refresh_token real con 30 días de validez.
const REFRESH_COOKIE_TTL_SECONDS = 60 * 60 * 8;

function getSecretKey(): Uint8Array {
  return new TextEncoder().encode(authEnv.sessionSecret);
}

/**
 * Guarda el refresh_token real de Cognito (nunca el access_token/id_token,
 * que solo se usan en memoria durante cada request) en una cookie httpOnly
 * separada de cs_session, envuelto en un JWT propio firmado — mismo patrón
 * que session.ts. Es el único lugar donde persiste algo emitido por
 * Cognito; el resto de la app sigue usando cs_session (sub/email) para
 * todo lo que no sea llamar a la API de progreso.
 */
export async function saveCognitoRefreshTokenCookie(refreshToken: string): Promise<void> {
  const token = await new SignJWT({ refreshToken })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${REFRESH_COOKIE_TTL_SECONDS}s`)
    .sign(getSecretKey());

  const store = await cookies();
  store.set(REFRESH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: REFRESH_COOKIE_TTL_SECONDS,
  });
}

export async function clearCognitoRefreshTokenCookie(): Promise<void> {
  const store = await cookies();
  store.delete(REFRESH_COOKIE_NAME);
}

async function getCognitoRefreshToken(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(REFRESH_COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return typeof payload.refreshToken === "string" ? payload.refreshToken : null;
  } catch {
    return null;
  }
}

/**
 * Cambia el refresh_token guardado por un access_token fresco vía
 * /oauth2/token de Cognito (grant_type=refresh_token). Se pide uno nuevo
 * en cada llamada en vez de cachear el access_token entre requests: Cognito
 * los emite con 60 minutos de validez por defecto, y el volumen de esta
 * app (un usuario viendo su propio dashboard) no justifica manejar
 * expiración/caché a mano.
 *
 * Devuelve null si no hay refresh_token guardado o si Cognito lo rechaza
 * (revocado o expirado) — el caller debe tratar la sesión como inválida.
 */
export async function getFreshCognitoAccessToken(): Promise<string | null> {
  const refreshToken = await getCognitoRefreshToken();
  if (!refreshToken) {
    return null;
  }

  const response = await fetch(`https://${authEnv.domain}/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: authEnv.clientId,
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { access_token?: string };
  return typeof data.access_token === "string" ? data.access_token : null;
}
