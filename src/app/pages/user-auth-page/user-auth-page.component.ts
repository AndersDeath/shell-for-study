import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserLoginModel, UserRegistrationModel } from 'sfs-data-model';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss']
})
export class UserAuthPageComponent implements OnInit, OnDestroy {

  public title: string = "Auth Page";
  public data: UserRegistrationModel = new UserRegistrationModel({
    firstName: 'Test',
    lastName: 'Testov',
    email: 'test@test.test',
    password: '12',
    passwordConfirmation: '12',
    phone: '+79990001122'
  });

  public data2: UserLoginModel = new UserLoginModel({
    email: 'test@test.test',
    password: '12',
  });

  private subsciptions: Subscription[] = []

  constructor(
    public sidebar: SidebarService,
    private userApi: UserApiService
    ) { }

  ngOnInit(): void {}

  public formDataEmitter(data: UserRegistrationModel) {
    console.log('UserRegistrationModel: ',data);
    const sub = this.userApi.registration(data).subscribe((e) => {
      console.log(e);
    });
    this.subsciptions.push(sub);
  }

  public formDataEmitter2(data: UserLoginModel) {
    console.log('UserRegistrationModel: ',data);
    const sub = this.userApi.login(data).subscribe((e) => {
      console.log('Login result: ',e);
    });
    this.subsciptions.push(sub);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  ngOnDestroy() {
    for (let index = 0; index < this.subsciptions.length; index++) {
      this.subsciptions[index].unsubscribe();
    }
  }
}
