import { UserLoginModel } from 'sfs-data-model';
import { authLogin } from 'src/app/state/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public title: string = "Main page";
  public isLoginShow = false;
  public isRegisterShow = false;
  public isRestorePassword = false;

  public data2: UserLoginModel = new UserLoginModel({
    email: 'test@test.test',
    password: '12',
  });


  constructor(
    public sidebar: SidebarService,
    private router: Router,
    private store: Store

    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogin') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  public formDataEmitter2(data: any) {
    this.store.dispatch(authLogin(data));

    // TODO: remove it in prod
    localStorage.setItem('isLogin','true')
    this.router.navigate(['dashboard']);
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
}
