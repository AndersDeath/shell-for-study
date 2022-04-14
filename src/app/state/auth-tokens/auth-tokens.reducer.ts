

import { createReducer, on } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';
import { update } from './auth-tokens.actions';


export const initialState: Tokens = new Tokens({
  access_token: '',
  refresh_token: ''
});

export const authTokensReducer = createReducer(
  initialState,
  on(update, (state, tokens) => { return {...state, ...tokens}})
);
