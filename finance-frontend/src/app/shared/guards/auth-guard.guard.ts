import { Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { KeycloakService } from "@services/keycloak.service";
import { Observable } from "rxjs";


export class AuthGuard {

  constructor(
    readonly store: Store,
    private router: Router
  ) {}


}