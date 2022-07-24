import {createSelector } from '@ngrx/store';

export const getStore = (state: any) => state;

export const selectAuthTokens = createSelector(
  getStore,
  (state: any) => state.store.tokens
);

export const selectStore = createSelector(
  getStore,
  (state: any) => state.store
);

export const selectProfile = createSelector(
  getStore,
  (state: any) => state.store.profile
);
