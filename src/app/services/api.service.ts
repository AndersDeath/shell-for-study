import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private freeDictApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  constructor(
    private http: HttpClient
  ) { }

  search(word: string) {
    return this.http.get(this.freeDictApi + word);
  }
}
