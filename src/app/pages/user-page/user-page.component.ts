import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sfs-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public title: string = "Demo User";

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

}
