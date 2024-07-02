/*import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { HttpApiProvider } from "@provider/http/http-api.provider";
import { map, Observable } from "rxjs";

*/
/*
@Injectable()
export class HttpApiImplProvider implements HttpApiProvider {
  /** "data" property name in response DTO*/
 /* private DATA_PROPERTY: string = "data";

  constructor(private httpClient: HttpClient) {}

  getAll<U, R>(url: string, toModelFn: (dto: U) => R): Observable<R[]> {
    let observable$: Observable<ResponseDto<U>> =
      this.httpClient.get<ResponseDto<U>>(url);
    return this.execute(observable$, toModelFn);
  }

  getNoArg<R>(url: string, options?: any): Observable<R> {
    return this.httpClient.get<R>(url, options) as unknown as Observable<R>;
  }

  get<U, R>(
    url: string,
    toModelFn: (dto: U) => R,
    options?: any
  ): Observable<R> {
    return this.httpClient.get<ResponseDto<U>>(url, options).pipe(
      map((val) => val[`${this.DATA_PROPERTY}`]),

      map((dtoList: Array<any>) =>
        dtoList.length > 0 ? toModelFn(dtoList[0]) : null
      )
    );
  }
  /**
   * Execute the Http request by subscribing to the Observable in argument
   * @param observable$ The Observable to subscribe on
   * @param toModelFn The mapper function to be applied on the ResponseDto
   */
 /* private execute<U, R>(
    observable$: Observable<ResponseDto<U>>,
    toModelFn: (dto: U) => R
  ): Observable<R[]> {
    if (!observable$) {
      throw new Error("Unable to process the response");
    }

    let models: R[] = [];

    return new Observable((observable) => {
      observable$.subscribe({
        complete(): void {},
        next: (responseDto) => {
          models = responseDto?.getData?.map((dto) => toModelFn(dto));
          return observable.next(models);
        },
        error: (error) => {
          return observable.error(error);
        },
      });
    });
  }
}*/
