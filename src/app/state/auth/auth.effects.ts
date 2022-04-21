import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { authUpdate, AUTH_LOGIN, AUTH_UPDATE, UPDATE_PROFILE } from './auth.actions';

@Injectable()
export class LoginEffect {
  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_LOGIN),
      mergeMap((creds: any) =>
        this.api.login(creds).pipe(
          map((cred) => {
            return {...cred };
          }),
          catchError(() => EMPTY)
        )
      ),
      tap(res => this.store.dispatch(authUpdate(res)),),
      mergeMap((creds: any) =>
        this.api.getProfile(creds).pipe(
          map((profile) => {
            // console.log('Profile', profile, creds);
            return { type: UPDATE_PROFILE, ...profile };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: UserApiService, private store: Store) {}
}
