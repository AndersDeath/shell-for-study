import { Component, OnInit } from '@angular/core';
import { UserLoginModel, UserRegistrationModel } from 'sfs-data-model';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss']
})
export class UserAuthPageComponent implements OnInit {

  public title: string = "Auth Page";
  public data: UserRegistrationModel = new UserRegistrationModel({
    firstName: 'Test',
    lastName: 'Testov',
    email: 'test@test.test',
    password: '12',
    passwordConfirmation: '12',
    phone: '+79990001122'
  });
  constructor(
    public sidebar: SidebarService,
    private userApi: UserApiService
    ) { }

  ngOnInit(): void {}

  public formDataEmitter(data: UserRegistrationModel) {
    console.log('UserRegistrationModel: ',data);
    this.userApi.registration(data).subscribe((e) => {
      console.log(e);
    })
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
