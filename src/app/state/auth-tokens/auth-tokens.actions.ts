import { createAction, props } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';

const AUTH_TOKENS_PREFIX = '[Auth Tokens] ';
export const AUTH_TOKENS_UPDATE = AUTH_TOKENS_PREFIX + 'Update';
export const update = createAction(AUTH_TOKENS_UPDATE, props<Tokens>());
