import { UserApiService } from 'src/app/services/user-api/user-api.service';
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
import { catchError, mergeMap, switchMap, map, concatMap } from 'rxjs/operators';
import { refreshTokensAction } from './state/auth/auth.actions';
import { LS_TOKENS } from 'sfs-data-model';

export function parseJwt(token:string) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public tokens: any = {};

  constructor(
    public api: UserApiService
    // public store: Store
    ) {
      // store.select(selectAuthTokens).subscribe((e) => {
      //   this.tokens = e;
      // });
    }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localData = localStorage.getItem(LS_TOKENS) || '';
    let tokens = {
      access: '',
      refresh: ''
    };
    if(localData) {
      tokens = JSON.parse(localData) || '';

    }


    if(
      request.url.indexOf('auth/login') === -1 ||
      request.url.indexOf('auth/registration') === -1 ||
      request.url.indexOf('auth/refresh') === -1
    ) {


    //   if(parseJwt(tokens.access).exp * 1000 < Date.now()) {
    //     // console.log('adasd')
    //     return this.api.refresh(tokens).pipe(switchMap((res: any) => {
    //       console.log('aaarwr',res);
    //       return next.handle(request);
    //     }))

    //     // .subscribe((e: any) => {
    //     //   return next.handle()
    //     // });
    //   }


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
