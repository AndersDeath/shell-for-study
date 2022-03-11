import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/profile/profile.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserApiService } from 'src/app/services/user-api.service';

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
    private api: UserApiService,
    ) { }

  ngOnInit(): void {
    this.user = this.api.getUserData();
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  formDataEmitter(data: any) {
    console.log(data);
  }
}
