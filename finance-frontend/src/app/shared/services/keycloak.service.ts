import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js'
import { Store } from '@ngxs/store';

import { InitializeUser } from '@store/user-session/user-session.action';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class KeycloakService {
 
  private _keycloak!: Keycloak;
  private _profile: User;
  private _roles: string[] = [];

  constructor(private store: Store) {}

  get Keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://172.29.208.1:7080/authh/',
        realm: 'Finance-Actia',
        clientId: 'Finance-App'
      });
    }
    return this._keycloak;
  }

  get profile(): User | undefined {
    return this._profile;
  }
  hasAdminRole(): boolean {
    return this._profile?.roles?.includes('admin_fn') ?? false;
  }
  get roles(): string[] {
    return this._roles;
  }

  async init() {
    console.log("AUTHENTICATING THE USER...");
    const authentication = await this.Keycloak?.init({
      onLoad: 'login-required'
    });

    if (authentication) {
      this._profile = await this.Keycloak?.loadUserProfile() as User;
      console.log("User profile loaded:", this._profile);

      if (this._keycloak.tokenParsed) {
        const tokenParsed = this._keycloak.tokenParsed;
        console.log("Full tokenParsed object:", tokenParsed);

        if (tokenParsed.resource_access && tokenParsed.resource_access['account']) {
          this._roles = tokenParsed.resource_access['account'].roles || [];
        } else {
          console.error("Resource access or roles not found in the token.");
          this._roles = [];
        }
      } else {
        console.error("Token parsed is undefined.");
        this._roles = [];
      }

      this.store.dispatch(new InitializeUser(this._profile));
      console.log("Username:", this._profile.username);
      console.log("Roles:", this._roles);
    }
  }

  login() {
    return this.Keycloak?.login();
  }

  logout() {
    return this.Keycloak?.logout({
      redirectUri: 'http://172.29.208.1:7080/angular-finance'
    });
  }
  }
  