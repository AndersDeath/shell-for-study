import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/profile/profile.model';
import { UserProfileSerivce } from 'src/app/services/user-profile/user-profile.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

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
    private profile: UserProfileSerivce
  ) { }

  ngOnInit(): void {
    this.user = this.profile.get();
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

}
