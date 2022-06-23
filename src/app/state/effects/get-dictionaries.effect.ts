import { UPDATE_DICTIONARIES } from './../data.actions';
import { GET_BIBLIOGRAPHY } from '../data.actions';
import { DataApiService } from '../../services/data-api/data-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

@Injectable()
export class GetDictionariesEffect {
  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_BIBLIOGRAPHY),
      mergeMap((creds: any) =>
        this.api.getDictionaries(creds).pipe(
          map((list) => {
            return { type: UPDATE_DICTIONARIES, data: list.data };
          }),
          catchError(() => EMPTY)
        )
      ),
    ),
  );

  constructor(private actions$: Actions, private api: DataApiService) {}
}
