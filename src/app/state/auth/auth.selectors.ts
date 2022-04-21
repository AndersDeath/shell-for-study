import {createSelector } from '@ngrx/store';

export const getTokens = (state: any) => state;

export const selectAuthTokens = createSelector(
  getTokens,
  (state: any) => state.auth.tokens
);
