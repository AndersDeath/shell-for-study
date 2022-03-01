import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

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
  constructor(
    public sidebar: SidebarService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogin') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }

  toggleSidebar() {
    this.sidebar.toggle();
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
