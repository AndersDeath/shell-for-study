import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sfs-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss']
})
export class UserAuthPageComponent implements OnInit {

  public title: string = "Auth Page";

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
