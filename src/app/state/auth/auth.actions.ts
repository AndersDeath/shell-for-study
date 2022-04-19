import { createAction, props } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';

const AUTH_PREFIX = '[Auth] ';
export const AUTH_UPDATE = AUTH_PREFIX + 'Update';
export const AUTH_LOGIN = AUTH_PREFIX + 'Login';

export const authUpdate = createAction(AUTH_UPDATE, props<Tokens>());
export const authLogin = createAction(
  AUTH_LOGIN,
  props<{ email: any,  password: any}>()
);
