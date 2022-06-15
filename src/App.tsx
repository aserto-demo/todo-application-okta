import React from "react";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginWrapper } from "./LoginWrapper";

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_DOMAIN + "/oauth2/default",
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
});

const Loading = () => {
  return <div>Loading</div>;
};

const App = () => {
  const navigate = useNavigate();
  const restoreOriginalUri: (
    _oktaAuth: OktaAuth,
    originalUri: string
  ) => Promise<void> = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route
          path="login/callback"
          element={<LoginCallback loadingElement={<Loading />} />}
        />
      </Routes>
    </Security>
  );
};

export default App;
