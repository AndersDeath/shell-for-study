import { createAction, props } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';

const AUTH_TOKENS_PREFIX = '[Auth Tokens] ';
export const AUTH_TOKENS_UPDATE_ACCESS = AUTH_TOKENS_PREFIX + 'Update access';
export const AUTH_TOKENS_UPDATE_ALL = AUTH_TOKENS_PREFIX + 'Update All';

export const updateAccess = createAction(AUTH_TOKENS_UPDATE_ACCESS, props<Tokens>());
export const updateAll = createAction(AUTH_TOKENS_UPDATE_ALL, props<Tokens>());
