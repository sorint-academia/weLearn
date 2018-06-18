// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { KeycloakOnLoad } from 'keycloak-angular';

export const environment = {
  production: false,
  keycloakConfig: {
    url: 'http://127.0.0.1:8080/auth', //Set the correct URL address to keycloak
    realm: 'marconi', //Set the correct realm name
    clientId: 'welearn-fe'
  },
  backendBaseUrl: "http://127.0.0.1:8081", //Set the correct backend base URL without '/' at the end 
  logger: true
};
