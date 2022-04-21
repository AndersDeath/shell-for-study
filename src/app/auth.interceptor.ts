import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public store: Store
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer`
    //   }
    // });
    console.log('AUTH INTERCEPTOR: ', request);
    return next.handle(request);
  }
}
