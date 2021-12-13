import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpened = false;
  version = 'v0.4.1';

  constructor(
    public sidebar: SidebarService
    ) {

  }

  ngOnInit() {
    this.isOpened = this.sidebar.opened;
    console.log('----------------------');
    console.log('Shell for study (SFS) ' + this.version);
    console.log('----------------------');
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  watchClose() {
    this.sidebar.close();
  }
}
