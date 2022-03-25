import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  DictionaryItem
} from '../data/data-lib';
import {
  DictionaryData
 } from '../data/dictionary-data';

@Injectable({
  providedIn: 'root'
})
export class DictionaryApiService {
  public subject = new BehaviorSubject((() => {
    const defaultData: DictionaryItem[] = [];
    for (let index = 0; index < DictionaryData.length; index++) {
      defaultData.push(new DictionaryItem(DictionaryData[index]))
    };
    return defaultData;
  })());
  constructor() {}
}
