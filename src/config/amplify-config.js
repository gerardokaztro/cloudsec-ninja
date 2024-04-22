// src/config/amplify-config.js

import awsConfig from "./aws-exports";

export function configure() {
  // Assuming you have two redirect URIs, and the first is for localhost and
  // second is for production
  const [localRedirectSignIn, productionRedirectSignIn] =
    awsConfig.oauth.redirectSignIn.split(",");

  const [localRedirectSignOut, productionRedirectSignOut] =
    awsConfig.oauth.redirectSignOut.split(",");

  const updatedAwsConfig = {
    ...awsConfig,
    oauth: {
      ...awsConfig.oauth,
      redirectSignIn:
        process.env.ENV === "localhost"
          ? localRedirectSignIn
          : productionRedirectSignIn,
      redirectSignOut:
        process.env.ENV === "localhost"
          ? localRedirectSignOut
          : productionRedirectSignOut,
    },
  };

  return updatedAwsConfig;
}