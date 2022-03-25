import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public fullNavigation: BehaviorSubject<[]> = new BehaviorSubject([]);
  public dashboardNavigation: BehaviorSubject<[]> = new BehaviorSubject([]);
  constructor() { }
}
