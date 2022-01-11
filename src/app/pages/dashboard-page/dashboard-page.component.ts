import { Component, OnInit } from '@angular/core';
import { createSFSMenuData, SFSMenuItem } from 'src/app/data/data-lib';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'sfs-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public items: SFSMenuItem[] = createSFSMenuData(true);
  public title: string = "Dashboard";

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
