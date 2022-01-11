import { Component, OnInit } from '@angular/core';
import { ARTICLE_VIEW, CARDS_VIEW, FAKE_FLASHCARDS_VIEW } from 'src/app/data/data-lib';
import { Dictionary, DictionaryBuilder } from 'src/app/data/data-lib';
import { GlossaryData } from 'src/app/data/glossary-data';

@Component({
  selector: 'sfs-glossary-page',
  templateUrl: './glossary-page.component.html',
  styleUrls: ['./glossary-page.component.scss']
})
export class GlossaryPageComponent implements OnInit {
  public dictionary: Dictionary =  DictionaryBuilder(GlossaryData);
  public title: string = 'Glossary';
  public viewTypes = [CARDS_VIEW, ARTICLE_VIEW];
  constructor() { }

  ngOnInit(): void {
  }

}
