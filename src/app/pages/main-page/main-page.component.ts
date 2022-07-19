import { getProfile } from '../../state/auth.actions';
import { Subscription } from 'rxjs';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { LS_TOKENS, UserLoginModel, Tokens, UserRegistrationModel } from 'sfs-data-model';
import { authLogin } from 'src/app/state/auth.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public title: string = "Main page";
  public isLoginShow = false;
  public isRegisterShow = false;
  public isRestorePassword = false;
  // {
  //   email: 'test@test.test',
  //   password: '12',
  // }
  public loginData: UserLoginModel = new UserLoginModel({});

  // {
  //   firstName: 'Test',
  //   lastName: 'Testov',
  //   email: 'test@test.test',
  //   password: '12',
  //   passwordConfirmation: '12',
  //   phone: '+79990001122'
  // }
  public registrationData: UserRegistrationModel = new UserRegistrationModel({});


  private subscriptions: Subscription[] = []

  constructor(
    public sidebar: SidebarService,
    private router: Router,
    private store: Store,
    private api: UserApiService

    ) { }

  ngOnInit(): void {
    this.authCheck();
  }

  authCheck() {
    if(localStorage.getItem(LS_TOKENS) !== undefined) {
      console.log(localStorage.getItem(LS_TOKENS));
      this.router.navigate(['dashboard']);
    } else {
      // const tokens = JSON.parse(localStorage.getItem(LS_TOKENS) || '');
      // this.store.dispatch(getProfile({access: tokens.access, refresh: tokens.refresh }));
    }
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  public loginEmitter(data: any) {
    const sub = this.api.login(data).subscribe((e) => {
      localStorage.setItem(LS_TOKENS, JSON.stringify(e));
      this.authCheck();
    })
    this.subscriptions.push(sub);
  }

  public registrationEmitter(data: UserRegistrationModel) {
    // console.log('UserRegistrationModel: ',data);
    const sub = this.api.registration(data).subscribe((e) => {
      console.log(e);
    });
    this.subscriptions.push(sub);
  }

  showLogin() {
    this.isLoginShow = true;
    this.isRegisterShow = false;
    this.isRestorePassword = false;
  }

  showRegister() {
    this.isLoginShow = false;
    this.isRegisterShow = true;
    this.isRestorePassword = false;
  }

  showRestorePassword() {
    this.isLoginShow = true;
    this.isRegisterShow = false;
    this.isRestorePassword = true;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((e: Subscription) => {
      e.unsubscribe();
    })
  }
}
