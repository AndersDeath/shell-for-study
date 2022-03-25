import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createSFSMenuData, SFSMenuItem } from '../../data/data-lib';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public fullNavigation: BehaviorSubject<SFSMenuItem[]> = new BehaviorSubject<SFSMenuItem[]>([]);
  public dashboardNavigation: BehaviorSubject<SFSMenuItem[]> = new BehaviorSubject<SFSMenuItem[]>([]);
  constructor() {
    this.setFullNavigation();
  }

  setFullNavigation() {
    this.fullNavigation.next(createSFSMenuData());
  }

  setDashboardNavigation() {
    this.fullNavigation.next(createSFSMenuData(true));
  }
}
