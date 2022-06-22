import { getBibliography } from './../../state/data.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-bibliography-page',
  templateUrl: './bibliography-page.component.html',
  styleUrls: ['./bibliography-page.component.scss']
})
export class BibliographyPageComponent implements OnInit {

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
    },
    {
      url: "https://practicepteonline.com/",
      header: "IELTS MASTER",
      title: "Large collection of IELTS tests for four modules",
      description: "For IELTS we have the largest collection of tests for all four modules. These tests have been prepared from the actual IELTS examination that have come in the recent time. Students can do comprehensive practice for IELTS from our website for each module. Our Youtube Tutorials are extremely helpful with valuable tips on scoring high bands in IELTS."
    }
  ]

  constructor(
    public sidebar: SidebarService,
    private store: Store,
    ) { }

  ngOnInit(): void {
    this.store.dispatch(getBibliography());
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
