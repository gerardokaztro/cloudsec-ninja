// El access_token usado acá viene siempre de getFreshCognitoAccessToken(),
// pedido por este mismo servidor directo a Cognito por HTTPS en el mismo
// request — no es un token que nos entregue un cliente sin confiar en él,
// así que no hace falta verificar su firma para esta verificación. Es
// además solo UX (ocultar/redirigir la opción de admin); la seguridad
// real la garantiza el authorizer JWT + el check de cognito:groups que
// hace la Lambda en cada POST /admin/*.
const ADMIN_GROUP_REGEX = /\badmin\b/;

function decodeAccessTokenPayload(accessToken: string): { "cognito:groups"?: string[] } | null {
  const payloadB64 = accessToken.split(".")[1];
  if (!payloadB64) {
    return null;
  }
  try {
    const padded = payloadB64.replace(/-/g, "+").replace(/_/g, "/");
    const json = Buffer.from(padded, "base64").toString("utf-8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function hasAdminGroup(accessToken: string): boolean {
  const payload = decodeAccessTokenPayload(accessToken);
  const groups = payload?.["cognito:groups"] ?? [];
  return groups.some((group) => ADMIN_GROUP_REGEX.test(group));
}
