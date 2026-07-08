import { NextResponse } from "next/server";
import { clearCognitoRefreshTokenCookie } from "@/lib/auth/cognito-tokens";
import { buildCognitoLogoutUrl } from "@/lib/auth/oidc";
import { clearSessionCookie } from "@/lib/auth/session";

export async function GET() {
  await clearSessionCookie();
  await clearCognitoRefreshTokenCookie();
  // También cierra la sesión de la Hosted UI (si no, un nuevo /login con Google podría
  // reautenticar sin pedir credenciales de nuevo).
  return NextResponse.redirect(buildCognitoLogoutUrl());
}
