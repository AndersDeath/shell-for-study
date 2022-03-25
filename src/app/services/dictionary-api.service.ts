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
