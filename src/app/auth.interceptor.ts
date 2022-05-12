import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthTokens } from './state/auth/auth.selectors';
import { catchError } from 'rxjs/operators';
import { refreshTokensAction } from './state/auth/auth.actions';
import { LS_TOKENS } from 'sfs-data-model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public tokens: any = {};

  constructor(
    // public store: Store
    ) {
      // store.select(selectAuthTokens).subscribe((e) => {
      //   this.tokens = e;
      // });
    }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens = JSON.parse(localStorage.getItem(LS_TOKENS) || '');
    if(
      request.url.indexOf('auth/login') === -1 ||
      request.url.indexOf('auth/registration') === -1 ||
      request.url.indexOf('auth/refresh') === -1
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokens.access}`
        }
      });
    }

    console.log('AUTH INTERCEPTOR: ', request, tokens);
    return next.handle(request);
    // return next.handle(request).pipe(catchError((error) => {
    //   if(error instanceof HttpErrorResponse && (request.url.indexOf('auth/login') === -1 ||
    //   request.url.indexOf('auth/registration') === -1 ||
    //   request.url.indexOf('auth/refresh') === -1) && error.status  === 401) {
    //     console.log('THIS IS 401');
    //     this.store.dispatch(refreshTokensAction(this.tokens));
    //     return next.handle(request.clone());
    //   }
    //   return throwError(error);
    // }));
  }

  check(url: string) {

  }
}
