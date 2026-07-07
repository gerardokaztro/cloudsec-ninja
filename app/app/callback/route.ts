import { type NextRequest, NextResponse } from "next/server";
import * as client from "openid-client";
import { getOidcConfig } from "@/lib/auth/oidc";
import { consumeOAuthStateCookie } from "@/lib/auth/oauth-state";
import { createSessionCookie } from "@/lib/auth/session";

export async function GET(request: NextRequest) {
  const oauthState = await consumeOAuthStateCookie();
  if (!oauthState) {
    // Cookie de estado ausente o expirada (>5 min): no podemos validar PKCE/state con seguridad.
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const config = await getOidcConfig();

  let tokens;
  try {
    tokens = await client.authorizationCodeGrant(config, request, {
      pkceCodeVerifier: oauthState.codeVerifier,
      expectedState: oauthState.state,
    });
  } catch (error) {
    console.error("Error al intercambiar el código de autorización con Cognito:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const claims = tokens.claims();
  if (!claims || typeof claims.email !== "string") {
    console.error("El id_token de Cognito no incluye el claim 'email'.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  await createSessionCookie({ sub: claims.sub, email: claims.email });

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
