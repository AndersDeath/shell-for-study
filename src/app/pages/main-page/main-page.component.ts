import { Component, OnInit } from '@angular/core';
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

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  showLogin() {
    this.isLoginShow = true;
    this.isRegisterShow = false;
  }

  showRegister() {
    this.isLoginShow = false;
    this.isRegisterShow = true;
  }

}
