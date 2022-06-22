import { getProfile } from '../../state/auth.actions';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LS_TOKENS, Tokens, UserLoginModel, UserRegistrationModel } from 'sfs-data-model';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { authLogin, checkAuthAction } from 'src/app/state/auth.actions';
import { selectStore } from 'src/app/state/auth.selectors';
import { SidebarService } from '../../services/sidebar/sidebar.service';


function parseJwt(token:string) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

// function checkTokenExp() {
//   if(store.getAccessToken() === '') {
//     return true;
//   } else {
//     return parseJwt(store.getAccessToken()).exp * 1000 < Date.now();
//   }
// }

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

  private subscriptions: Subscription[] = []

  constructor(
    public sidebar: SidebarService,
    private userApi: UserApiService,
    private store: Store,
    private router: Router,
    ) { }

  ngOnInit(): void {
    console.log('THis is auth page')
    const sub = this.store.select(selectStore).subscribe((e) => {
      console.log('user-auth-page component: ',e);
      this.snapshot = {...e};
    });
    this.subscriptions.push(sub);
    // const tokens = JSON.parse(localStorage.getItem(LS_TOKENS) || '');
    // this.store.dispatch(getProfile({access: tokens.access, refresh: tokens.refresh }));
  }

  public formDataEmitter(data: UserRegistrationModel) {
    // console.log('UserRegistrationModel: ',data);
    const sub = this.userApi.registration(data).subscribe((e) => {
      console.log(e);
    });
    this.subscriptions.push(sub);
  }

  public logout() {
    const tokens = localStorage.getItem(LS_TOKENS) || '';
    console.log(LS_TOKENS, tokens);
    const sub = this.userApi.logout(JSON.parse(tokens) || {}).subscribe((e) => {
      console.log(e);
      localStorage.removeItem(LS_TOKENS);
      this.router.navigate(['']);
    })
    this.subscriptions.push(sub);
  }

  public getProfile() {
    const tokens = JSON.parse(localStorage.getItem(LS_TOKENS) || '');
    // const test = parseJwt(tokens.access);
    // console.log(test)
    // console.log(test.exp * 1000)
    // console.log(Date.now());
    // console.log(test.exp * 1000 < Date.now());
    this.store.dispatch(getProfile({access: tokens.access, refresh: tokens.refresh }));
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

  loginEmitter(data: any) {
    const sub = this.userApi.login(data).subscribe((e) => {
      localStorage.setItem(LS_TOKENS, JSON.stringify(e));
    })
    this.subscriptions.push(sub);
  }

  checkAuth() {
    console.log('check auth works!');
    this.store.dispatch(checkAuthAction(this.snapshot.tokens));
  }

  refresh() {
    const localData = localStorage.getItem(LS_TOKENS) || '';
    let tokens = {
      access: '',
      refresh: ''
    };
    if(localData) {
      tokens = JSON.parse(localData) || '';
    }

    const sub = this.userApi.refresh(tokens).subscribe((e) => {
      console.log('this is new token pair', e);
      localStorage.setItem(LS_TOKENS, JSON.stringify(e));
    });
    this.subscriptions.push(sub);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  ngOnDestroy() {
    for (let index = 0; index < this.subscriptions.length; index++) {
      this.subscriptions[index].unsubscribe();
    }
  }
}
