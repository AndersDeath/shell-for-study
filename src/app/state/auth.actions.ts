import { createAction, props, UPDATE } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';

const AUTH_PREFIX = '[Auth] ';
export const AUTH_UPDATE = AUTH_PREFIX + 'Update';
export const AUTH_LOGIN = AUTH_PREFIX + 'Login';
export const UPDATE_PROFILE = AUTH_PREFIX + 'Update Profile';

export const GET_PROFILE = AUTH_PREFIX + 'Get Profile'

export const REFRESH_TOKENS = AUTH_PREFIX + 'Refresh tokens';

export const CHECK_AUTH = AUTH_PREFIX + 'Check Auth';

export const UPDATE_CHECK_AUTH = AUTH_PREFIX + 'Update Auth';

export const authUpdate = createAction(AUTH_UPDATE, props<Tokens>());
export const authLogin = createAction(
  AUTH_LOGIN,
  props<{ email: any; password: any }>()
);

export const getProfile = createAction(
  GET_PROFILE,
  props<Tokens>()
)

export const updateProfile = createAction(
  UPDATE_PROFILE,
  props<{
    id: any;
    login: any;
    firstName: any;
    lastName: any;
    email: any;
    phone: any;
    status: any;
    description: any;
    avatar: any;
    banner: any;
    password: any;
    salt: any;
    dateCreate: any;
    isActive: any;
  }>()
);

export const updateCheckAuthAction = createAction(UPDATE_CHECK_AUTH, props<Tokens>());
export const checkAuthAction = createAction(CHECK_AUTH, props<Tokens>());
