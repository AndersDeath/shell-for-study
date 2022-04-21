import { createReducer, on } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';
import { authLogin, authUpdate, checkAuthAction, profileUpdate } from './auth.actions';

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
    console.log('payload', payload);
    return {
      ...state,
      ...{
        tokens: {
          access: payload.access_token,
          refresh: payload.refresh_token,
        },
      },
    };
  }),
  on(profileUpdate, (state, payload: any) => {
    console.log('payload: ===== ', payload);
    return {
      ...state,
      ...{
        profile: {
          id: payload.id,
          login: payload.login,
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phone: payload.phone,
          status: payload.status,
          description: payload.description,
          avatar: payload.avatar,
          banner: payload.banner,
          password: payload.password,
          salt: payload.salt,
          dateCreate: payload.dateCreate,
          isActive: payload.isActive,
        },
      },
    };
  }),
  on(checkAuthAction, (state, payload: any) => {
    return {
      ...state
    }
  })
);
