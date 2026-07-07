import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { authEnv } from "./env";

const SESSION_COOKIE_NAME = "cs_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8h

export interface SessionPayload {
  sub: string;
  email: string;
}

function getSecretKey(): Uint8Array {
  return new TextEncoder().encode(authEnv.sessionSecret);
}

/**
 * Guarda la sesión como un JWT propio (firmado, no cifrado) en una cookie httpOnly.
 * Contiene solo sub/email, nunca los tokens crudos de Cognito.
 */
export async function createSessionCookie(payload: SessionPayload): Promise<void> {
  const token = await new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(getSecretKey());

  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (typeof payload.sub !== "string" || typeof payload.email !== "string") {
      return null;
    }
    return { sub: payload.sub, email: payload.email };
  } catch {
    return null;
  }
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}
