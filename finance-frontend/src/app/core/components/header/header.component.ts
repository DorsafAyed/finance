import { Component, OnInit, signal } from "@angular/core";

import { AuthenticationRequest } from "@models/authentication-request";
import { Store } from "@ngxs/store";
import { KeycloakService } from "@services/keycloak.service";
import { UserSessionState } from "@store/user-session/user-session.state";
@Component({
  selector: "mtc-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  isCollapse = signal(false);
  display = true;
  authRequest: AuthenticationRequest = { username: '', password: '' };
  errorMsg: Array<string> = [];
  userName: string;

  constructor(
    private keycloakService: KeycloakService, private store: Store
  ) {}

  async ngOnInit(): Promise<void> {
    // Adding a console log to debug
    console.log('ngOnInit called');
    try {
      const user = this.store.selectSnapshot(UserSessionState.user);
      if (user) {
        this.userName = user.username;
        console.log('Username set to:', this.userName);
      } else {
        console.log('User not found in store');
      }
    } catch (error) {
      console.error('Error fetching user from store:', error);
    }
  }

  onToggle(event): void {
    this.isCollapse.set(event);
  }

  async logout() {
    this.keycloakService.logout()
  }
}
