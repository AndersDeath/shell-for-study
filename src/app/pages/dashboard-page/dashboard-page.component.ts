import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SFSMenuItem } from 'src/app/data/data-lib';
import { User } from 'src/app/modules/profile/profile.model';
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
  private subscriptions: Subscription[] = [];

  public user = new User({});

  constructor(
    public sidebar: SidebarService,
    private profile: UserProfileSerivce,
    private navigation: NavigationService
  ) { }

  ngOnInit(): void {
    this.user = this.profile.get();
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
