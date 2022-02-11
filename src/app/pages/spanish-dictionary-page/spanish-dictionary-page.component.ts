import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sfs-spanish-dictionary-page',
  templateUrl: './spanish-dictionary-page.component.html',
  styleUrls: ['./spanish-dictionary-page.component.scss']
})
export class SpanishDictionaryPageComponent implements OnInit {

  public title: string = "Spanish Dictionary";

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebar.toggle();
  }


}
