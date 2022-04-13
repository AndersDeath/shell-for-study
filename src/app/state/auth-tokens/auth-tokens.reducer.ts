

import { createReducer, on } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';
import { updateAccess, updateAll } from './auth-tokens.actions';


export const initialState: Tokens = new Tokens({
  access_token: '',
  refresh_token: ''
});

export const counterReducer = createReducer(
  initialState,
  on(updateAccess,  (state) => { return {...state, refresh: 'new'}}),
  on(updateAll, (state) => { return {...state}})
);
