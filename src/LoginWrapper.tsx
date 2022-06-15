import React from "react";

import { TodoApp } from "./TodoApp";
import { toRelativeUrl } from "@okta/okta-auth-js";

import TodoService from "./todoService";
import { useOktaAuth } from "@okta/okta-react";
import { IAuthUser } from "./interfaces";

export function LoginWrapper() {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState || !authState?.isAuthenticated) {
    const originalUri = toRelativeUrl(
      window.location.href,
      window.location.origin
    );
    oktaAuth.setOriginalUri(originalUri);
    oktaAuth.signInWithRedirect();

    return <>Loading</>;
  }

  const accessToken = authState.accessToken;
  const token = accessToken?.accessToken as string;
  const claims = authState.idToken?.claims;
  const user: IAuthUser = {
    sub: claims?.sub as string,
    email: claims?.email as string,
  };

  //Only load the app if the user is logged in, and user data is available
  if (token && user) {
    return (
      <TodoService token={token}>
        <TodoApp user={user} />
      </TodoService>
    );
  } else {
    return <>Whoops</>;
  }
}
