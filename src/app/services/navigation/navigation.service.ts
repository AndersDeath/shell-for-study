import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { createSFSMenuData, SFSMenuItem, DictionaryItem } from '../../data/data-lib';
import { DictionaryApiService } from '../dictionary-api/dictionary-api.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public fullNavigation: BehaviorSubject<SFSMenuItem[]> = new BehaviorSubject<SFSMenuItem[]>([]);
  public dashboardNavigation: BehaviorSubject<SFSMenuItem[]> = new BehaviorSubject<SFSMenuItem[]>([]);
  public dictionaryData: DictionaryItem[] = [];

  constructor(
    public dictionaryApiService: DictionaryApiService
  ) {
    this.init();
  }
  // TODO: resolve dictionaryAPi subscriptions

  init() {
    this.dictionaryApiService.subject.subscribe((d:DictionaryItem[]) => {
      this.dictionaryData = d;
      this.setFullNavigation();
      this.setDashboardNavigation();
    });
  }

  setFullNavigation() {
    console.log('setFullNavigation');
    this.fullNavigation.next(createSFSMenuData());
  }

  setDashboardNavigation() {
    console.log('setDashboardNavigation');
    this.dashboardNavigation.next(createSFSMenuData(true));
  }
}
