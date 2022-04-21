import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { CHECK_AUTH } from './auth.actions';

@Injectable()
export class CheckAuthEffect {
  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CHECK_AUTH),
      mergeMap((creds: any) =>
        this.api.checkAuth(creds).pipe(
          map((cred) => {
            console.log('check auth', cred);
            return { type: CHECK_AUTH, ...cred };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: UserApiService) {}
}
