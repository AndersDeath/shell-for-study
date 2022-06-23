import { createAction, props, UPDATE } from '@ngrx/store';
import { Tokens } from 'sfs-data-model';

const DATA_PREFIX = '[Data] ';
export const GET_BIBLIOGRAPHY = DATA_PREFIX + 'Get Bibliography';
export const UPDATE_BIBLIOGRAPHY = DATA_PREFIX + 'Update Bibliography';

export const GET_DICTIONARIES = DATA_PREFIX + 'Get Dictionaries';
export const UPDATE_DICTIONARIES = DATA_PREFIX + 'Update Dictionaries';


export const getBibliography = createAction(
  GET_BIBLIOGRAPHY
)

export const updateBibliography = createAction(
  UPDATE_BIBLIOGRAPHY,
  props<any>()
);


export const getDictionaries = createAction(
  GET_DICTIONARIES
)

export const updateDictionaries = createAction(
  UPDATE_DICTIONARIES,
  props<any>()
);
