import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Tokens, UserLoginModel, UserRegistrationModel } from 'sfs-data-model';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { authLogin, checkAuthAction } from 'src/app/state/auth/auth.actions';
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
    private userApi: UserApiService,
    private store: Store
    ) { }

  ngOnInit(): void {}

  public formDataEmitter(data: UserRegistrationModel) {
    console.log('UserRegistrationModel: ',data);
    const sub = this.userApi.registration(data).subscribe((e) => {
      console.log(e);
    });
    this.subsciptions.push(sub);
  }

  public formDataEmitter2(data: any) {
    console.log('UserRegistrationModel: ',data);
    // const sub = this.userApi.login(data).subscribe((e: any) => {
    //   const tokens = new Tokens(e)
    //   console.log('Login result: ',tokens);
    //   console.log('Login access: ',tokens.access);
    //   console.log('Login refresh: ',tokens.refresh);

    // });
    // this.subsciptions.push(sub);
    this.store.dispatch(authLogin(data));

  }

  checkAuth() {
    console.log('check auth works!');
    this.store.dispatch(checkAuthAction({test: 'check'}));
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
