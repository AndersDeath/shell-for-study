import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpened = false;
  version = 'Version 0.1.0';

  constructor(
    public sidebar: SidebarService
    ) {

  }
  title = 'vnb-dictionary';

  ngOnInit() {
    this.isOpened = this.sidebar.opened;
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  watchClose() {
    this.sidebar.close();
  }
}