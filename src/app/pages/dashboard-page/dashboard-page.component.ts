import { Store } from '@ngrx/store';
import { selectProfile } from './../../state/auth.selectors';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SFSMenuItem, User } from 'sfs-data-model';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { UserProfileSerivce } from 'src/app/services/user-profile/user-profile.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'sfs-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public items: SFSMenuItem[] = []
  public title: string = "Dashboard";
  public user$: Observable<User> = new Observable();
  private subscriptions: Subscription[] = [];

  public user = new User({});

  constructor(
    public sidebar: SidebarService,
    private navigation: NavigationService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectProfile)
    const sub = this.navigation.dashboardNavigation.subscribe((e:SFSMenuItem[]) => {
      this.items = e;
    });
    this.subscriptions.push(sub);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  ngOnDestroy() {
    if(this.subscriptions) {
      this.subscriptions.forEach((s: Subscription) => {
        s.unsubscribe();
      })
    }
  }
}
