
import { Injectable } from "@angular/core";
import { User } from "@models/user";

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { InitializeUser } from "@store/user-session/user-session.action";
import { Observable } from "rxjs";

export interface UserSessionStateModel {
  user: User;
  roles: string[];
}

@State<UserSessionStateModel>({
  name: "user",
})

@State<UserSessionStateModel>({
  name: "roles"
})

@Injectable()
export class UserSessionState {
 roles$: any


  @Selector()
  static user(state: UserSessionStateModel): User {
    return state.user;
  }
  constructor() { }

  @Selector()
  static roles(state: UserSessionStateModel): string[] {
    return state.user.roles;
  }
 


  @Action(InitializeUser)
  storeUser(
    ctx: StateContext<UserSessionStateModel>,
    action: InitializeUser
  ): void {
    ctx.patchState({
      user: action.user,
    });
  }



  @Action(InitializeUser)
  storeRoles(
    ctx: StateContext<UserSessionStateModel>,
    action: InitializeUser
  ): void {
    ctx.patchState({
      roles: action.user.roles,
    });
  }

}
