import { Component, OnInit } from '@angular/core';
import { CARDS_VIEW, FAKE_FLASHCARDS_VIEW, FLASHCARDS_VIEW, SPELLING_TEST_VIEW, TABLE_VIEW } from 'src/app/constants';
import { Dictionary, DictionaryBuilder } from 'src/app/data/data-lib';
import { TransitionWordsData } from 'src/app/data/transition-words-data';
import { TranslationsData } from 'src/app/data/translations-data';

@Component({
  selector: 'sfs-transition-words-page',
  templateUrl: './transition-words-page.component.html',
  styleUrls: ['./transition-words-page.component.scss']
})
export class TransitionWordsPageComponent implements OnInit {

  public dictionary: Dictionary =  DictionaryBuilder(TransitionWordsData);
  public title: string = 'Transition words';
  public viewTypes = [ CARDS_VIEW, FAKE_FLASHCARDS_VIEW, TABLE_VIEW, FLASHCARDS_VIEW ];

  constructor() { }

  ngOnInit(): void {
  }

}
