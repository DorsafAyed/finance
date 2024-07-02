import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { KeycloakService } from '@services/keycloak.service';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  
  constructor(
    private keycloakService: KeycloakService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.keycloakService.Keycloak.token; 
    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.keycloakService.Keycloak.token}`
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}