
export interface TranslateModel {
  download: string;
  contextMenu: {
    searchInGoogle: string;
    searchInYandex: string;
    searchInOxfordDict: string;
    translateToRussian: string;
  },
  dictionary: {
    views: {
      cards: string;
      table: string;
      article: string;
      fakeFlashcards: string;
      flashCards: string;
      spellingTest: string;
    }
  }
}

export const EN = 'en';
export const RU = 'ru';
