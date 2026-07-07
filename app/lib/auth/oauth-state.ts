import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { authEnv } from "./env";

const OAUTH_STATE_COOKIE_NAME = "cs_oauth_state";
// Vida corta: solo necesita sobrevivir el viaje de ida y vuelta a la Hosted UI.
const OAUTH_STATE_TTL_SECONDS = 60 * 5;

export interface OAuthState {
  codeVerifier: string;
  state: string;
}

function getSecretKey(): Uint8Array {
  return new TextEncoder().encode(authEnv.sessionSecret);
}

/**
 * Guarda code_verifier (PKCE) + state en una cookie httpOnly firmada de corta duración,
 * para poder validarlos cuando Cognito redirige de vuelta a /callback.
 */
export async function createOAuthStateCookie(value: OAuthState): Promise<void> {
  const token = await new SignJWT({ codeVerifier: value.codeVerifier, state: value.state })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${OAUTH_STATE_TTL_SECONDS}s`)
    .sign(getSecretKey());

  const store = await cookies();
  store.set(OAUTH_STATE_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: OAUTH_STATE_TTL_SECONDS,
  });
}

/** Lee y borra la cookie de estado OAuth (uso único). */
export async function consumeOAuthStateCookie(): Promise<OAuthState | null> {
  const store = await cookies();
  const token = store.get(OAUTH_STATE_COOKIE_NAME)?.value;
  store.delete(OAUTH_STATE_COOKIE_NAME);
  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (typeof payload.codeVerifier !== "string" || typeof payload.state !== "string") {
      return null;
    }
    return { codeVerifier: payload.codeVerifier, state: payload.state };
  } catch {
    return null;
  }
}
