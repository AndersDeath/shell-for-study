import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-free-dictionary-page',
  templateUrl: './free-dictionary-page.component.html',
  styleUrls: ['./free-dictionary-page.component.scss']
})
export class FreeDictionaryPageComponent implements OnInit {

  public title: string = "Free Dictionary";

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebar.toggle();
  }

}
