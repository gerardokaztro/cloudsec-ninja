// src/components/Login/index.js

import React from "react";

import { Authenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Redirect } from "@docusaurus/router";

import "./styles.css";

export function Login({ from, to }) {
  return (
    <View className="auth-wrapper">
      <Authenticator>{<Redirect to={to} from={from} />}</Authenticator>
    </View>
  );
}