
import { Component, OnInit } from "@angular/core";
import { AuthenticationRequest } from "@models/authentication-request";
import { KeycloakService } from "@services/keycloak.service";
@Component({
  selector: "mtc-template",
  templateUrl: "./template.component.html",
  styleUrl: "./template.component.scss",
})


export class TemplateComponent implements OnInit {
  
 authRequest: AuthenticationRequest = {username: '', password: ''};
 errorMsg: Array<string> = [];

 constructor(
   private ss: KeycloakService
 ) {
 }

 async ngOnInit(): Promise<void> {
 // console.log("token : ", this.ss.Keycloak.token)
 }

 async logout (){
   this.ss.logout()
   }
}
