import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@models/user.model";
import {
  USER_SESSION_PROVIDER_IMPL,
  UserSessionProvider,
} from "@services/user-session/user-session.provider";

@Injectable({
  providedIn: "root",
})
export class UserSessionService {
  constructor(
    @Inject(USER_SESSION_PROVIDER_IMPL)
    private userSessionProvider: UserSessionProvider
  ) {}

  getUser(): Observable<User> {
    return this.userSessionProvider.getUser();
  }
}
