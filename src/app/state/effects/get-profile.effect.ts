import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { GET_PROFILE, UPDATE_PROFILE } from '../auth.actions';

@Injectable()
export class GetProfileEffect {
  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_PROFILE),
      mergeMap((creds: any) =>
        this.api.getProfile(creds).pipe(
          map((profile) => {
            return { type: UPDATE_PROFILE, ...profile };
          }),
          catchError(() => EMPTY)
        )
      ),
    ),
  );

  constructor(private actions$: Actions, private api: UserApiService) {}
}
