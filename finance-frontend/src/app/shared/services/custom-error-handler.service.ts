import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Inject }  from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
  //providedIn: 'root'
)
export class CustomErrorHandlerService  implements ErrorHandler{

  constructor( private router: Router) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse && error.status === 403) {
      this.router.navigate(['/error', error.status]);
    } else 
    {
      // Handle other errors as needed.
    }
}
}