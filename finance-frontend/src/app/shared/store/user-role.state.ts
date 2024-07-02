//import { User } from "@models/user.model";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { UserRoleAction } from "./user-role.action";
import { Observable, tap } from "rxjs";
import { KeycloakService } from '@services/keycloak.service';
import { UserProfile } from "@models/user-profile";

export interface UserRoleStateModel{
    user: UserProfile;
}