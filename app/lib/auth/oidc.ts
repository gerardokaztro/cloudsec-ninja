import * as client from "openid-client";
import { authEnv } from "./env";

// Scopes: openid (requerido para id_token) + email (para mostrar "Hola, {email}").
export const OAUTH_SCOPE = "openid email";

let configPromise: Promise<client.Configuration> | null = null;

/**
 * El discovery document de Cognito (issuer = cognito-idp.{region}.amazonaws.com/{userPoolId})
 * expone authorization_endpoint/token_endpoint/userinfo_endpoint apuntando al dominio de la
 * Hosted UI. Se cachea a nivel de módulo para no repetir la llamada de discovery en cada request.
 */
export function getOidcConfig(): Promise<client.Configuration> {
  if (!configPromise) {
    const issuer = new URL(
      `https://cognito-idp.${authEnv.region}.amazonaws.com/${authEnv.userPoolId}`,
    );
    configPromise = client
      .discovery(issuer, authEnv.clientId, undefined, client.None())
      .catch((error: unknown) => {
        configPromise = null;
        throw error;
      });
  }
  return configPromise;
}

/**
 * Cognito no implementa RP-Initiated Logout (no publica end_session_endpoint en su discovery
 * document); el cierre de sesión de la Hosted UI usa un endpoint propio: GET /logout.
 * https://docs.aws.amazon.com/cognito/latest/developerguide/federation-endpoints.html
 */
export function buildCognitoLogoutUrl(): string {
  const url = new URL(`https://${authEnv.domain}/logout`);
  url.searchParams.set("client_id", authEnv.clientId);
  url.searchParams.set("logout_uri", authEnv.logoutUrl);
  return url.toString();
}
