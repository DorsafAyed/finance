import { Type } from "@angular/core";


export interface Environment {
  production: boolean;
  applicationConfigFile: string;
  appBaseHref: string;

  apiUrl: string;

}
