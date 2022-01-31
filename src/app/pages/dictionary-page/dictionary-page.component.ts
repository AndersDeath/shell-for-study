import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  CARDS_VIEW,
  FAKE_FLASHCARDS_VIEW,
  TABLE_VIEW,
  SPELLING_TEST_VIEW,
  FLASHCARDS_VIEW,
  ARTICLE_VIEW,
} from 'src/app/data/data-lib';
import { DictionaryBuilder } from 'src/app/data/data-lib';
import { GlossaryData } from 'src/app/data/glossary-data';
import { jsQuestionsData } from 'src/app/data/js-questions-data';
import { TransitionWordsData } from 'src/app/data/transition-words-data';
import { TranslationsData } from 'src/app/data/translations-data';
import { tsQuestionsData } from 'src/app/data/ts-questions-data';
import { SixMinuteEnglish } from '../../data/6-minute-english-data';

@Component({
  selector: 'sfs-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss'],
})
export class DictionaryPageComponent implements OnInit, OnDestroy {
  private data: any;
  private subscriptions: Subscription[] = [];
  public currentData: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = [
      {
        dictionaryId: 'english-words',
        title: 'Dictionary',
        viewTypes: [
          CARDS_VIEW,
          FAKE_FLASHCARDS_VIEW,
          TABLE_VIEW,
          SPELLING_TEST_VIEW,
          FLASHCARDS_VIEW,
        ],
        dictionary: DictionaryBuilder(TranslationsData),
      },
      {
        dictionaryId: 'glossary',
        title: 'Glossary',
        viewTypes: [CARDS_VIEW, ARTICLE_VIEW],
        dictionary: DictionaryBuilder(GlossaryData),
      },
      {
        dictionaryId: '6-minute-english',
        title: '6 minute English',
        viewTypes: [
          CARDS_VIEW,
          FAKE_FLASHCARDS_VIEW,
          TABLE_VIEW,
          SPELLING_TEST_VIEW,
          FLASHCARDS_VIEW,
        ],
        dictionary: DictionaryBuilder(SixMinuteEnglish),
      },
      {
        dictionaryId: 'js-interview-questions',
        title: 'JS Interview Questions',
        viewTypes: [CARDS_VIEW, ARTICLE_VIEW],
        dictionary: DictionaryBuilder(jsQuestionsData()),
      },
      {
        dictionaryId: 'ts-interview-questions',
        title: 'Ts Interview Questions',
        viewTypes: [CARDS_VIEW, ARTICLE_VIEW],
        dictionary: DictionaryBuilder(tsQuestionsData()),
      },
      {
        dictionaryId: 'transition-words',
        title: 'Transition words',
        viewTypes: [
          CARDS_VIEW,
          FAKE_FLASHCARDS_VIEW,
          TABLE_VIEW,
          FLASHCARDS_VIEW,
        ],
        dictionary: DictionaryBuilder(TransitionWordsData),
      },
    ];

    const sub = this.activatedRoute.params.subscribe((params) => {
      this.currentData = undefined;
      this.currentData = this.data.find((e: any) => {
        return e.dictionaryId === params.dictionaryId;
      });
      if (!this.currentData) {
        this.router.navigate(['/']);
      }
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    if(this.subscriptions) {
      this.subscriptions.forEach((e: Subscription) => e.unsubscribe());
    }
  }
}
