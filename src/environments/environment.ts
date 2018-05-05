// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { KeycloakOnLoad } from 'keycloak-angular';

export const environment = {
  production: false,
  keycloakConfig: {
    url: 'http://172.22.20.250:8082/auth',
    realm: 'marconi',
    clientId: 'welearn-fe'
  },
  backendBaseUrl: "http://172.22.20.250:8085",
  logger: true
};
