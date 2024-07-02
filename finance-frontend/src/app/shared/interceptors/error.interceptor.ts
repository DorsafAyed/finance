import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorComponent } from '@core/components/error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const router = this.injector.get(Router);
        const errorComponent = this.injector.get(ErrorComponent);

        if (error.status === 403) {
          errorComponent.errorCode = error.status;
          errorComponent.errorMessage = error.message;
          router.navigate(['/error', error.status]);
        }

        return throwError(error);
      })
    );
  }
}