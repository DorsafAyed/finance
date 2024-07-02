import { Inject, Injectable } from "@angular/core";
import { ApplicationConfig } from "../../models/application-config.model";
///import { HttpApiImplProvider } from "../../providers/http/http-api-impl.provider";
import { tap } from "rxjs";

import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class ApplicationConfigService {
  private _applicationConfig: ApplicationConfig;

  constructor(
  
  ) {}

  loadAppConfig(appConfigFileUrl: string) {

      getNoArg<ApplicationConfig>(appConfigFileUrl)
      .pipe(
        tap((data) => {
          this._applicationConfig = {
            backendApiUrl: JSON.parse(JSON.stringify(data)).backendApiHostname,
          };
        })
      );
  }

  getBackendApiHostname(): string {
    return this._applicationConfig.backendApiUrl;
  }

  get appConfig(): ApplicationConfig {
    return this._applicationConfig;
  }
  
}
