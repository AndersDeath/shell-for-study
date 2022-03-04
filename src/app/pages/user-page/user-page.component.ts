import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/profile/profile.model';
import { UserApiService } from 'src/app/services/user-api.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sfs-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public title: string = "Demo User";
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
