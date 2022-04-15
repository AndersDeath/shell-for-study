import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserApiService } from 'src/app/services/user-api/user-api.service';

@Injectable()
export class LoginEffect {

  loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth] login'),
    mergeMap((creds: any) => this.api.login(creds)
      .pipe(
        map(cred => ({ type: '[Auth] login success', payload: cred })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private api: UserApiService
  ) {}
}
