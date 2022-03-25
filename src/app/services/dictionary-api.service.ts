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
  DictionaryItem
} from '../data/data-lib';
import {
  RuEsPhrasebookData,
  RuUkPhrasebookData,
  RuBePhrasebookData,
  TransitionWordsData,
  tsQuestionsData,
  jsQuestionsData,
  SixMinuteEnglish,
  GlossaryData,
  TranslationsData
 } from '../data/dictionary-data';


const rawData = [
  {
    dictionaryId: 'english-words',
    title: 'Dictionary',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'SPELLING_TEST_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: TranslationsData
  },
  {
    dictionaryId: 'glossary',
    title: 'Glossary',
    viewTypes: [
      'CARDS_VIEW',
      'ARTICLE_VIEW'
    ],
    dictionary: GlossaryData,
  },
  {
    dictionaryId: '6-minute-english',
    title: '6 minute English',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'SPELLING_TEST_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: SixMinuteEnglish,
  },
  {
    dictionaryId: 'js-interview-questions',
    title: 'JS Interview Questions',
    viewTypes: [
      'CARDS_VIEW',
      'ARTICLE_VIEW'
    ],
    dictionary: jsQuestionsData(),
  },
  {
    dictionaryId: 'ts-interview-questions',
    title: 'Ts Interview Questions',
    viewTypes: [
      'CARDS_VIEW',
      'ARTICLE_VIEW'
    ],
    dictionary: tsQuestionsData(),
  },
  {
    dictionaryId: 'transition-words',
    title: 'Transition words',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: TransitionWordsData,
  },
  {
    dictionaryId: 'ru-be-phrasebook',
    title: 'Russian-Belarusian Phrasebook',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: RuBePhrasebookData,
  },
  {
    dictionaryId: 'ru-uk-phrasebook',
    title: 'Russian-Ukranian Phrasebook',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: RuUkPhrasebookData,
  },
  {
    dictionaryId: 'ru-es-phrasebook',
    title: 'Russian-Spanish Phrasebook',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: RuEsPhrasebookData,
  }
]

const defaultData: DictionaryItem[] = [
  new DictionaryItem(rawData[0]),
  new DictionaryItem(rawData[1]),
  new DictionaryItem(rawData[2]),
  new DictionaryItem(rawData[3]),
  new DictionaryItem(rawData[4]),
  new DictionaryItem(rawData[5]),
  new DictionaryItem(rawData[6]),
  new DictionaryItem(rawData[7]),
  new DictionaryItem(rawData[8]),
];

@Injectable({
  providedIn: 'root'
})
export class DictionaryApiService {
  public subject = new BehaviorSubject(defaultData);
  constructor() {}
}
