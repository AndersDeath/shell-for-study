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
  on(authLogin, (state, payload: any) => {
    return { ...state, ...{ userForm: { email: payload.email } } };
  }),
  on(authUpdate, (state, payload: any) => {
    console.log('payload', payload)
    return {
      ...state,
      ...{
        tokens: {
          access: payload.access_token,
          refresh: payload.refresh_token,
        },
      },
    };
  })
);
