import { Component, OnInit } from '@angular/core';
import { createSFSMenuData, SFSMenuItem } from 'src/app/data/data-lib';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'sfs-bibliography-page',
  templateUrl: './bibliography-page.component.html',
  styleUrls: ['./bibliography-page.component.scss']
})
export class BibliographyPageComponent implements OnInit {

  public items: SFSMenuItem[] = createSFSMenuData(true);
  public title: string = "Bibliography";


  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
