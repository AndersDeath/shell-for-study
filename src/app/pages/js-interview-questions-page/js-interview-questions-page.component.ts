import { Component, OnInit } from '@angular/core';
import { ARTICLE_VIEW, CARDS_VIEW, FAKE_FLASHCARDS_VIEW } from 'src/app/constants';
import { Dictionary, DictionaryBuilder } from 'src/app/data/data-lib';
import { jsQuestionsData } from 'src/app/data/js-questions-data';

@Component({
  selector: 'sfs-js-interview-questions-page',
  templateUrl: './js-interview-questions-page.component.html',
  styleUrls: ['./js-interview-questions-page.component.scss']
})
export class JsInterviewQuestionsPageComponent implements OnInit {
  public dictionary: Dictionary =  DictionaryBuilder(jsQuestionsData());
  public title: string = 'JS Interview Questions';
  public viewTypes = [CARDS_VIEW, ARTICLE_VIEW,];
  constructor() { }

  ngOnInit(): void {
  }

}
