import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

  constructor(public api: UserApiService) {}

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
      request.url.indexOf('auth/login') === -1 &&
      request.url.indexOf('auth/registration') === -1 &&
      request.url.indexOf('auth/refresh') === -1 &&
      request.url.indexOf('check-server') === -1
    ) {
      if(parseJwt(tokens.access).exp * 1000 < Date.now()) {
        return this.api.refresh(tokens).pipe(switchMap((res: any) => {
          localStorage.setItem(LS_TOKENS, JSON.stringify(res));
          return next.handle(this.setAuthToken(request, res));
        }));
      }
    }
    return next.handle(this.setAuthToken(request, tokens));
  }

  setAuthToken(request:any ,tokens: any) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${tokens.access}`
      }
    });
    return request;
  }
}
