import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
      return new Promise(async (resolve, reject) => {
        try {
          await keycloak.init({
              config: environment.keycloakConfig, //MI DA ERRORE DURANTE LA BUILD
              initOptions: {
                  onLoad: "login-required",
                  checkLoginIframe: true,
              }
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    };
  }