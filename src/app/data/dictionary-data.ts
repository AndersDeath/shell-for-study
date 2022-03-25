import { TranslationsData } from './translations-data';
import { GlossaryData } from './glossary-data';
import { SixMinuteEnglish } from './6-minute-english-data';
import { jsQuestionsData } from './js-questions-data';
import { tsQuestionsData } from './ts-questions-data';
import { TransitionWordsData } from './transition-words-data';
import { RuBePhrasebookData } from './ru-be-phrasebook-data';
import { RuUkPhrasebookData } from './ru-uk-phrasebook-data';
import { RuEsPhrasebookData } from './ru-es-phrasebook-data';


export const DictionaryData = [
  {
    dictionaryId: 'english-words',
    title: 'English dictionary',
    viewTypes: [
      'CARDS_VIEW',
      'FAKE_FLASHCARDS_VIEW',
      'TABLE_VIEW',
      'SPELLING_TEST_VIEW',
      'FLASHCARDS_VIEW',
    ],
    dictionary: TranslationsData,
    icon: "i-en-language"
  },
  {
    dictionaryId: 'glossary',
    title: 'Glossary of terms',
    viewTypes: [
      'CARDS_VIEW',
      'ARTICLE_VIEW'
    ],
    dictionary: GlossaryData,
    icon: 'i-book'
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
    icon: 'i-en-language'
  },
  {
    dictionaryId: 'js-interview-questions',
    title: 'JS Interview Questions',
    viewTypes: [
      'CARDS_VIEW',
      'ARTICLE_VIEW'
    ],
    dictionary: jsQuestionsData(),
    icon: 'i-javascript'
  },
  {
    dictionaryId: 'ts-interview-questions',
    title: 'Ts Interview Questions',
    viewTypes: [
      'CARDS_VIEW',
      'ARTICLE_VIEW'
    ],
    dictionary: tsQuestionsData(),
    icon: 'i-typescript'
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
    icon: 'i-en-language'
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
    icon: 'i-empty-book'
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
    icon: 'i-empty-book'
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
    icon: 'i-empty-book'
  }
]
