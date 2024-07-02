import { User } from "@models/user";


export class InitializeUser {
  static readonly type = "[Auth] InitializeUser";
  constructor(public user: User) {}
}
