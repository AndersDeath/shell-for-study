import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { AUTH_UPDATE, CHECK_AUTH, REFRESH_TOKENS, UPDATE_CHECK_AUTH } from './auth.actions';

@Injectable()
export class RefreshTokensEffect {
  checkAuthEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(REFRESH_TOKENS),
      mergeMap((creds: any) =>
        this.api.refresh(creds).pipe(
          map((cred) => {
            console.log('check auth', cred);
            return { type: AUTH_UPDATE, ...cred };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: UserApiService) {}
}
