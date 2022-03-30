import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DictionaryItem, SFSMenuItem } from 'sfs-data-model';
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
  public dictionarySegment: SFSMenuItem[] = [];

  constructor(
    public dictionaryApiService: DictionaryApiService
  ) {
    this.init();
  }
  // TODO: resolve dictionaryAPi subscriptions

  init() {
    this.dictionaryApiService.subject.subscribe((d:DictionaryItem[]) => {
      this.buildDictionarySegment(d);
      this.setFullNavigation();
      this.setDashboardNavigation();
    });
  }

  buildDictionarySegment(d:DictionaryItem[]) {
    this.dictionarySegment = d.map((item: DictionaryItem):SFSMenuItem=> {
      return new SFSMenuItem(
        '/dictionary/' + item.dictionaryId,
        item.title,
        item.icon
      );
    });
  }

  setFullNavigation() {
    this.fullNavigation.next([...dashboardSegment, ...this.dictionarySegment, ...commonSegment]);
  }

  setDashboardNavigation() {
    this.dashboardNavigation.next([...this.dictionarySegment, ...commonSegment]);
  }
}
