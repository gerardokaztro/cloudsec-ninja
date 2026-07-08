function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}. Revisa .env.local (ver .env.local.example).`);
  }
  return value;
}

export const authEnv = {
  get userPoolId(): string {
    return required("COGNITO_USER_POOL_ID");
  },
  get clientId(): string {
    return required("COGNITO_CLIENT_ID");
  },
  get domain(): string {
    return required("COGNITO_DOMAIN");
  },
  get callbackUrl(): string {
    return required("APP_CALLBACK_URL");
  },
  get logoutUrl(): string {
    return required("APP_LOGOUT_URL");
  },
  get sessionSecret(): string {
    return required("SESSION_SECRET");
  },
  get progressApiUrl(): string {
    // URL base del HTTP API de progreso (cloudsec-ninja-infra, output
    // progress_api_endpoint), sin slash final, ej:
    // https://v84fwide76.execute-api.us-east-1.amazonaws.com
    return required("PROGRESS_API_URL").replace(/\/$/, "");
  },
  get region(): string {
    // El user_pool_id de Cognito tiene el formato "{region}_{id}", ej. "us-east-1_qHj16czdO".
    const region = this.userPoolId.split("_")[0];
    if (!region) {
      throw new Error("COGNITO_USER_POOL_ID tiene un formato inválido, se esperaba '{region}_{id}'.");
    }
    return region;
  },
};
