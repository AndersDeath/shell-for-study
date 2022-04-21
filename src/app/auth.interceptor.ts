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
import { selectAuthTokens } from './state/auth/auth.selectors';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public tokens: any = {};

  constructor(
    public store: Store
    ) {
      store.select(selectAuthTokens).subscribe((e) => {
        this.tokens = e;
      });
    }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer`
    //   }
    // });

    console.log('AUTH INTERCEPTOR: ', request, this.tokens);
    return next.handle(request);
  }

  check(url: string) {

  }
}
