import { Subscription } from 'rxjs';
import { UserApiService } from 'src/app/services/user-api/user-api.service';
import { UserLoginModel } from 'sfs-data-model';
import { authLogin } from 'src/app/state/auth/auth.actions';
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

  public loginData: UserLoginModel = new UserLoginModel({
    email: 'test@test.test',
    password: '12',
  });

  private subscriptions: Subscription[] = []

  constructor(
    public sidebar: SidebarService,
    private router: Router,
    private store: Store,
    private api: UserApiService

    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogin') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  public loginEmitter(data: any) {
    const sub = this.api.login(data).subscribe((e) => {
      console.log(e);
    })
    this.subscriptions.push(sub);
    // this.store.dispatch(authLogin(data));

    // TODO: remove it in prod
    // localStorage.setItem('isLogin','true')
    // this.router.navigate(['dashboard']);
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
