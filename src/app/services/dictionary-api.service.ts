import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  CARDS_VIEW,
  FAKE_FLASHCARDS_VIEW,
  TABLE_VIEW,
  SPELLING_TEST_VIEW,
  FLASHCARDS_VIEW,
  DictionaryBuilder,
  ARTICLE_VIEW,
  Dictionary
} from '../data/data-lib';
import { TranslationsData } from '../data/translations-data';
import { GlossaryData } from '../data/glossary-data';
import { SixMinuteEnglish } from '../data/6-minute-english-data';
import { jsQuestionsData } from '../data/js-questions-data';
import { tsQuestionsData } from '../data/ts-questions-data';
import { TransitionWordsData } from '../data/transition-words-data';
import { RuBePhrasebookData } from '../data/ru-be-phrasebook-data';
import { RuUkPhrasebookData } from '../data/ru-uk-phrasebook-data';
import { RuEsPhrasebookData } from '../data/ru-es-phrasebook-data';

class DictionaryItem {
  public dictionaryId: string = '';
  public title: string = '';
  public viewTypes: string[] = [];
  public dictionary: Dictionary = new Dictionary();
  constructor(json: any) {
    this.dictionaryId = json.dictionaryId || '';
    this.title = json.title || '';
    this.viewTypes = json.viewTypes;
    this.dictionary = DictionaryBuilder(json.dictionary) || new Dictionary();
  }
}

const defaultData: DictionaryItem[] = [
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
  {
    dictionaryId: 'ru-be-phrasebook',
    title: 'Russian-Belarusian Phrasebook',
    viewTypes: [
      CARDS_VIEW,
      FAKE_FLASHCARDS_VIEW,
      TABLE_VIEW,
      FLASHCARDS_VIEW,
    ],
    dictionary: DictionaryBuilder(RuBePhrasebookData),
  },
  {
    dictionaryId: 'ru-uk-phrasebook',
    title: 'Russian-Ukranian Phrasebook',
    viewTypes: [
      CARDS_VIEW,
      FAKE_FLASHCARDS_VIEW,
      TABLE_VIEW,
      FLASHCARDS_VIEW,
    ],
    dictionary: DictionaryBuilder(RuUkPhrasebookData),
  },
  {
    dictionaryId: 'ru-es-phrasebook',
    title: 'Russian-Spanish Phrasebook',
    viewTypes: [
      CARDS_VIEW,
      FAKE_FLASHCARDS_VIEW,
      TABLE_VIEW,
      FLASHCARDS_VIEW,
    ],
    dictionary: DictionaryBuilder(RuEsPhrasebookData),
  },
];

@Injectable({
  providedIn: 'root'
})
export class DictionaryApiService {
  public subject = new BehaviorSubject(defaultData);
  constructor() {}
}
