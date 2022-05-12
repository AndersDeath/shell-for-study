import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LS_TOKENS, Tokens, UserLoginModel, UserRegistrationModel } from 'sfs-data-model';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { authLogin, checkAuthAction } from 'src/app/state/auth/auth.actions';
import { selectStore } from 'src/app/state/auth/auth.selectors';
import { SidebarService } from '../../services/sidebar/sidebar.service';


@Component({
  selector: 'sfs-user-auth-page',
  templateUrl: './user-auth-page.component.html',
  styleUrls: ['./user-auth-page.component.scss']
})
export class UserAuthPageComponent implements OnInit, OnDestroy {

  public snapshot: any = {};
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

  ngOnInit(): void {

    const sub = this.store.select(selectStore).subscribe((e) => {
      console.log('user-auth-page component: ',e);
      this.snapshot = {...e};
    });
    this.subsciptions.push(sub)
  }

  public formDataEmitter(data: UserRegistrationModel) {
    // console.log('UserRegistrationModel: ',data);
    const sub = this.userApi.registration(data).subscribe((e) => {
      console.log(e);
    });
    this.subsciptions.push(sub);
  }

  public logout() {
    const tokens = localStorage.getItem(LS_TOKENS) || '';
    console.log(LS_TOKENS, tokens);
    const sub = this.userApi.logout(JSON.parse(tokens) || {}).subscribe((e) => {
      console.log(e);
      localStorage.removeItem(LS_TOKENS);
    })
    this.subsciptions.push(sub);
  }

  public formDataEmitter2(data: any) {
    // console.log('UserRegistrationModel: ',data);
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
    this.store.dispatch(checkAuthAction(this.snapshot.tokens));
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
