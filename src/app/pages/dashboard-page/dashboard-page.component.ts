import { Component, OnInit } from '@angular/core';
import { createSFSMenuData, SFSMenuItem } from 'src/app/data/data-lib';
import { User } from 'src/app/modules/profile/profile.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'sfs-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public items: SFSMenuItem[] = createSFSMenuData(true);
  public title: string = "Dashboard";

  public user = new User({});

  constructor(
    public sidebar: SidebarService,
    private api: UserApiService,
    ) { }

  ngOnInit(): void {
    this.user = this.api.getUserData();
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
