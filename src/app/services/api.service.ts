import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const FREE_DICT_API_URL =  'https://api.dictionaryapi.dev/api/v2/entries/en/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private freeDictApi:string = FREE_DICT_API_URL;
  constructor(
    private http: HttpClient
  ) { }

  search(word: string) {
    return this.http.get(this.freeDictApi + word);
  }
}
