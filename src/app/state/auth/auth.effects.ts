import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { AUTH_LOGIN, AUTH_UPDATE } from './auth.actions';

@Injectable()
export class LoginEffect {

  loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AUTH_LOGIN),
    mergeMap(
      (creds: any) => this.api.login(creds)
      .pipe(
        map((cred) => { console.log('CRED', cred);return ({ type: AUTH_UPDATE, payload: cred })}),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private api: UserApiService
  ) {}
}
