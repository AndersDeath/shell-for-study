import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public get = new Subject();
  public search = new Subject();
  constructor() { }

  set(el: any) {
    this.get.next(el);
    this.updateStorage(el);
  }

  public toSearch(word: any) {
    this.search.next(word);
  }

  public getAll() {
    return  this.loadDataFromStorage();
  }

  private updateStorage(el: any) {
    let st = this.loadDataFromStorage();
    st.push(el);
    localStorage.setItem('searchHistory', JSON.stringify(st));
  }

  private loadDataFromStorage() {
    let st: any = localStorage.getItem('searchHistory');
    if (st === null) {
      st = [];
    } else {
      st = JSON.parse(st);
    }
    return st;
  }


}
