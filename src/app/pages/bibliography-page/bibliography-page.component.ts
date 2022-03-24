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
  public linksList: {
    url: string;
    header: string;
    title: string;
    description: string;
  }[] = [
    {
      url: "https://lingust.ru/",
      header: "lingust.ru",
      title: "Изучение иностранных языков с нуля!",
      description: "Сайт с оцифрованными и преобразованными в уроки самоучителями различных языков"
    },
    {
      url: "https://www.bbc.co.uk/learningenglish/",
      header: "BBC Learning English",
      title: "Learning english, inspiring language learning since 1943",
      description: "Learn English with these free learning English videos and materials from BBC Learning English. This site will help you learn English and improve your pronunciation, grammar and vocabulary knowledge."
    }
  ]

  constructor(
    public sidebar: SidebarService,
    ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}