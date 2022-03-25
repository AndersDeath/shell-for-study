import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createSFSMenuData, SFSMenuItem, DictionaryItem } from '../../data/data-lib';
import { DictionaryApiService } from '../dictionary-api/dictionary-api.service';


const dashboardSegment = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: ''
  }
];
const commonSegment = [
  {
    path: '/free-dictionary',
    title: 'Free Dictionary',
    icon: 'i-dictionary'
  },
  {
    path: '/spanish-dictionary',
    title: 'Spanish Dictionary',
    icon: 'i-dictionary'
  },
  {
    path: '/bibliography',
    title: 'Bibliograpy',
    icon: 'i-empty-book'
  }
];

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public fullNavigation: BehaviorSubject<SFSMenuItem[]> = new BehaviorSubject<SFSMenuItem[]>([]);
  public dashboardNavigation: BehaviorSubject<SFSMenuItem[]> = new BehaviorSubject<SFSMenuItem[]>([]);
  public dictionarySegment: DictionaryItem[] = [];

  constructor(
    public dictionaryApiService: DictionaryApiService
  ) {
    this.init();
  }
  // TODO: resolve dictionaryAPi subscriptions

  init() {
    this.dictionaryApiService.subject.subscribe((d:DictionaryItem[]) => {
      this.dictionarySegment = d;
      this.setFullNavigation();
      this.setDashboardNavigation();
    });
  }

  buildDictionarySegment(d:DictionaryItem[]) {

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
