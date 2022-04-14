import { createReducer, on } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';
import { update } from './auth-tokens.actions';

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
  on(update, (state, tokens) => {
    return { ...state, ...tokens };
  })
);
