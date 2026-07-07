import { NextResponse } from "next/server";
import * as client from "openid-client";
import { authEnv } from "@/lib/auth/env";
import { getOidcConfig, OAUTH_SCOPE } from "@/lib/auth/oidc";
import { createOAuthStateCookie } from "@/lib/auth/oauth-state";

export async function GET() {
  const config = await getOidcConfig();

  // Deben generarse de nuevo en cada redirect a la Hosted UI.
  const codeVerifier = client.randomPKCECodeVerifier();
  const codeChallenge = await client.calculatePKCECodeChallenge(codeVerifier);
  const state = client.randomState();

  const authorizationUrl = client.buildAuthorizationUrl(config, {
    redirect_uri: authEnv.callbackUrl,
    scope: OAUTH_SCOPE,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    state,
  });

  await createOAuthStateCookie({ codeVerifier, state });

  return NextResponse.redirect(authorizationUrl);
}
