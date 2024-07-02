import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  private apiBaseUrl = 'http://172.29.208.1:7080/backend-finance/api-finance'; 

  

  constructor(private http: HttpClient, private kc: KeycloakService) {}


getListUsers(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiBaseUrl}/list-users`, {
    headers: {
      'Authorization': `Bearer ${this.kc.Keycloak.token}`
    },
    responseType: 'json'
  })


}

addUser(user: any): Observable<any> {
  return this.http.post<any>(`${this.apiBaseUrl}/add-user`, user , {
    headers: {
      'Authorization': `Bearer ${this.kc.Keycloak.token}`
    },
    responseType: 'json'
  });
}
 deleteUser(id: number): Observable<any>{
   return this.http.delete(`${this.apiBaseUrl}/delete-user/${id}`, {
    headers: {
      'Authorization': `Bearer ${this.kc.Keycloak.token}`
    }
  });
 }


 


}

