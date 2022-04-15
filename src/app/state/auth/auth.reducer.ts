import { createReducer, on } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';
import { authLogin, authUpdate } from './auth.actions';

interface SFStore {
  tokens: Tokens;
  profile: {};
}

export const initialState: SFStore = {
  profile: {},
  tokens: new Tokens({
    access_token: '',
    refresh_token: '',
  }),
};

export const authTokensReducer = createReducer(
  initialState,
  on(authLogin, (state, tokens) => {
    return { ...state, ...tokens };
  })
);
