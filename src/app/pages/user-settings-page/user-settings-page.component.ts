import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/profile/profile.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserProfileSerivce } from 'src/app/services/user-profile.service';

@Component({
  selector: 'sfs-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent implements OnInit {
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

  formDataEmitter(data: any) {
    this.profile.set({
      ...this.user,
      ...data
    });
  }
}
