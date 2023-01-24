# React Todo App using Okta for authentication

This is the front-end for the React Todo application example. It is derived from https://github.com/aserto-demo/todo-application, but wired up to the Okta SDK for authentication.

## Configuration

Copy the `.env.example` file to `.env`, and provide the following values:

```
REACT_APP_OKTA_DOMAIN={your Okta domain}
REACT_APP_OKTA_CLIENT_ID={ClientID for an Okta SPA app}
REACT_APP_OKTA_AUDIENCE={use "citadel-app" or create an "API" in Okta and use the audience value}
```

## Running the front end

`yarn`

`yarn start`

## Backends

This sample requires a backend that implements the Todo API.

> NOTE:
You will need to change the following environment variables in any back-end app you select, matching up with the Okta values you provided here:
> ```
> JWKS_URI=
> ISSUER=
> AUDIENCE={use "citadel-app" or create an "API" in Okta and use the audience value}
> ```


The following language-specific back-end sample apps are available, which demonstrate using Aserto for authorization:

| | Language | Repo |
| ---| --- | --- |
| <img src="https://raw.githubusercontent.com/aserto-dev/aserto-docs/main/static/nodejs.svg" height="30" /> | Node.js | https://github.com/aserto-demo/todo-node-js-v2 |
| <img src="https://raw.githubusercontent.com/aserto-dev/aserto-docs/main/static/go.svg" height="30" /> | Go | https://github.com/aserto-demo/todo-go-v2 |
| <img src="https://raw.githubusercontent.com/aserto-dev/aserto-docs/main/static/python.svg" height="30" /> | Python | https://github.com/aserto-demo/todo-python-v2 |
| <img src="https://raw.githubusercontent.com/aserto-dev/aserto-docs/main/static/ruby.svg" height="30" /> | Ruby | https://github.com/aserto-demo/todo-ruby-v2 |
| <img src="https://raw.githubusercontent.com/aserto-dev/aserto-docs/main/static/dotnet-core.svg" height="30" /> | .NET | https://github.com/aserto-demo/todo-dotnet-v2 |
