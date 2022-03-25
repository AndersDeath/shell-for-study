
export class IdGenClass {
  private id = 0;
  get() {
      ++this.id;
      return this.id;
  }

  current() {
      return this.id;
  }
}

const itemIdGen = new IdGenClass();

export class Subject {
  subject: string = '';
  ru?: string = '';
  en?: string = '';
  es?: string = '';
  be?: string = '';
  uk?: string = '';
  id?: number = 0;

  constructor(subject:string = '', langData: any) {
    this.subject = subject;
    this.ru = langData['ru'] || '';
    this.en = langData['en'] || '';
    this.es = langData['es'] || '';
    this.be = langData['be'] || '';
    this.uk = langData['uk'] || '';
    this.id = itemIdGen.get();
  }
}

export class SubjectGroup {
  title: string = '';
  subjects: Subject[] = [];
  id?: number = 0
  constructor(title:string = '', subject:Subject[] = []) {
    this.title = title;
    this.subjects = subject.map((s: Subject) => {
      return new Subject(s.subject, {
        ru: s.ru,
        en: s.en,
        es: s.es,
        be: s.be,
        uk: s.uk
      });
    });;
    this.id = itemIdGen.get();
  }
}

export class DictionarySection {
  title: string = '';
  groups: SubjectGroup[] = [];
  id?: number = 0
  constructor(title:string = '', groups:SubjectGroup[] = []) {
    this.title = title;
    this.groups = groups.map((g: SubjectGroup) => {
      return new SubjectGroup(g.title, g.subjects);
    });
    this.id = itemIdGen.get();
  }
}

export class Dictionary {
  title: string = '';
  sections: DictionarySection[] = [];
  id?: number = 0
  version?: number = 1;
  constructor(title:string = '', sections:DictionarySection[] = [], version: number = 1) {
    this.title = title;
    this.sections = sections.map((s: DictionarySection) => {
      return new DictionarySection(s.title, s.groups);
    })
    this.id = itemIdGen.get();
    this.version = version;
  }
}

export function DictionaryBuilder(data: any):Dictionary {
  return new Dictionary(data.title, data.sections, data.version);
}



export const TABLE_VIEW = 'TABLE_VIEW';
export const CARDS_VIEW = 'CARDS_VIEW';
export const FAKE_FLASHCARDS_VIEW = "FAKE_FLASHCARDS_VIEW";
export const FLASHCARDS_VIEW = "FLASHCARDS_VIEW";
export const ARTICLE_VIEW = "ARTICLE_VIEW";
export const SPELLING_TEST_VIEW = "SPELLING_TEST_VIEW";

export class SFSMenuItem {
  public path: string = '';
  public title: string = '';
  public icon: string = '';
  constructor(
    path:string = '',
    title: string = '',
    icon: string = ''
  ) {
    this.path = path;
    this.title = title;
    this.icon = icon;
  }
}

const menuData = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: ''
  },
  {
    path: '/dictionary/english-words',
    title: 'English dictionary',
    icon: 'i-en-language'
  },
  {
    path: '/dictionary/transition-words',
    title: 'Transition words',
    icon: 'i-en-language'
  },
  {
    path: '/dictionary/6-minute-english',
    title: '6 minute English',
    icon: 'i-en-language'
  },
  {
    path: '/dictionary/glossary',
    title: 'Glossary of terms',
    icon: 'i-book'
  },
  {
    path: '/dictionary/js-interview-questions',
    title: 'JS interview questions',
    icon: 'i-javascript'
  },
  {
    path: '/dictionary/ru-be-phrasebook',
    title: 'Russian-Belarusian Phrasebook',
    icon: 'i-empty-book'
  },
  {
    path: '/dictionary/ru-uk-phrasebook',
    title: 'Russian-Ukranian Phrasebook',
    icon: 'i-empty-book'
  },
  {
    path: '/dictionary/ru-es-phrasebook',
    title: 'Russian-Spanish Phrasebook',
    icon: 'i-empty-book'
  },
  {
    path: '/dictionary/ts-interview-questions',
    title: 'TS interview questions',
    icon: 'i-typescript'
  },
  {
    path: '/free-dictionary',
    title: 'Free Dictionary',
    icon: 'i-dictionary'
  },
  {
    path: '/spanish-dictionary',
    title: 'Spanish Dictionary',
    icon: 'i-dictionary'
  },
  {
    path: '/bibliography',
    title: 'Bibliograpy',
    icon: 'i-empty-book'
  }
];

export function createSFSMenuData(noRoot = false): SFSMenuItem[] {
  if(noRoot) {
    return menuData.filter((e: SFSMenuItem) => {
      return e.path !== '/' && e.path !== '/dashboard' ;
    });
  }
  return menuData;
}


export class DictionaryItem {
  public dictionaryId: string = '';
  public title: string = '';
  public viewTypes: string[] = [];
  public dictionary: Dictionary = new Dictionary();
  constructor(json: any) {
    this.dictionaryId = json['dictionaryId'] || '';
    this.title = json['title'] || '';
    this.viewTypes = json['viewTypes'] || [];
    this.dictionary = DictionaryBuilder(json.dictionary) || new Dictionary();
  }
};
