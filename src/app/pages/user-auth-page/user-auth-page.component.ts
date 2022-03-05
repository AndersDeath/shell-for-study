import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from 'src/app/modules/profile/components/user-login/user-login.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sfs-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss']
})
export class UserAuthPageComponent implements OnInit {

  public title: string = "Auth Page";
  public data: UserLoginModel = new UserLoginModel();
  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {}

  public formDataEmitter(data: UserLoginModel) {
    console.log('UserAuthData: ',data);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
