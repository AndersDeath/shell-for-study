import { User } from 'sfs-data-model';
import { updateBibliography, updateDictionaries } from './data.actions';
import { initialState } from './initial.store';
import { createReducer, on } from '@ngrx/store';
import { authLogin, authUpdate, updateProfile, updateCheckAuthAction } from './auth.actions';

export const mainReducer = createReducer(
  initialState,
  on(authLogin, (state, payload: any) => {
    return { ...state, ...{ userForm: { email: payload.email } } };
  }),
  on(authUpdate, (state, payload: any) => {
    // console.log('authUpdate', payload);
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
  on(updateProfile, (state, payload: any) => {
    // console.log('payload: ===== ', payload);
    return {
      ...state,
      ...{
        profile: new User(payload),
      },
    };
  }),
  on(updateBibliography, (state, payload: any) => {
    return {
      ...state,
      ...{
        data: {
         bibliography: payload.data
        },
      },
    };
  }),
  on(updateDictionaries, (state, payload: any) => {
    return {
      ...state,
      ...{
        data: {
         dictionaries: payload.data
        },
      },
    };
  }),
  on(updateCheckAuthAction, (state, payload: any) => {
    // console.log('checkAuthAction', state, payload)
    return {
      ...state,
      test: payload.check
    }
  })
);
