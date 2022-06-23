import {createSelector } from '@ngrx/store';

export const getStore = (state: any) => state;

export const selectBibliography = createSelector(
  getStore,
  (state: any) => state.store.data.bibliography
);
