import { NextResponse } from "next/server";
import { buildCognitoLogoutUrl } from "@/lib/auth/oidc";
import { clearSessionCookie } from "@/lib/auth/session";

export async function GET() {
  await clearSessionCookie();
  // También cierra la sesión de la Hosted UI (si no, un nuevo /login con Google podría
  // reautenticar sin pedir credenciales de nuevo).
  return NextResponse.redirect(buildCognitoLogoutUrl());
}
