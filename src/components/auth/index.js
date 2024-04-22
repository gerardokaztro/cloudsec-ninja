// src/components/Auth/index.js

import React from "react";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Redirect, useLocation } from "@docusaurus/router";

import {
  AUTHENTICATED,
  BASE,
  LOGIN_PATH,
  LOGOUT_PATH,
  PROTECTED_PATHS,
} from "../../utils/constants";
import { Login } from "../login";

export function AuthCheck({ children }) {
  const location = useLocation();
  let from = location.pathname;

  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  /*
    If it is not authenticated and tries to access the protected paths.
    Also, a custom error appears if anything happens.
  */
  if (route === AUTHENTICATED) {
    if (from === LOGOUT_PATH) {
      signOut();
      return <Redirect to={BASE} from={LOGOUT_PATH} />;
    } else if (from === LOGIN_PATH) return <Redirect to={BASE} from={from} />;

    return children;
  } else {
    if (from === LOGOUT_PATH) return <Redirect to={BASE} from={from} />;
    else if (PROTECTED_PATHS.filter((x) => from.includes(x)).length)
      return <Login />;
    else if (from === LOGIN_PATH) return <Login />;
    return children;
  }
}