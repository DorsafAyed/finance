import { Observable } from "rxjs";
import { User } from "@models/user.model";
import { InjectionToken } from "@angular/core";

export const USER_SESSION_PROVIDER_IMPL: InjectionToken<UserSessionProvider> =
  new InjectionToken("USER_SESSION_PROVIDER_IMPL");
export interface UserSessionProvider {
  getUser(): Observable<User>;
}
