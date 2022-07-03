import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INTERCEPTING");

    if(environment.apiKey1) {
      console.log(environment.apiKey1);
      const authHeader = request.clone({
        headers: request.headers.set(
          "x-api-key",
          environment.apiKey1
        )
      })

      request = authHeader;
    }
    return next.handle(request);
  }
}
