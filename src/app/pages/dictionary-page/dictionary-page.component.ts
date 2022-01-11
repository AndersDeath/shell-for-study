import { Component, OnInit } from '@angular/core';
import { CARDS_VIEW, FAKE_FLASHCARDS_VIEW, TABLE_VIEW, SPELLING_TEST_VIEW, FLASHCARDS_VIEW } from 'src/app/data/data-lib';
import { Dictionary, DictionaryBuilder } from 'src/app/data/data-lib';
import { TranslationsData } from 'src/app/data/translations-data';

@Component({
  selector: 'sfs-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {

  public dictionary: Dictionary =  DictionaryBuilder(TranslationsData);
  public title: string = 'Dictionary';
  public viewTypes = [ CARDS_VIEW, FAKE_FLASHCARDS_VIEW, TABLE_VIEW,SPELLING_TEST_VIEW, FLASHCARDS_VIEW ];

  constructor() { }

  ngOnInit(): void {
  }

}
