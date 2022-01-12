
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
  ru: string = '';
  en: string = '';
  id?: number = 0
  constructor(subject:string = '', ru:string = '', en: string = '') {
    this.subject = subject;
    this.ru = ru;
    this.en = en;
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
      return new Subject(s.subject, s.ru, s.en);
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

export interface SFSMenuItem {
  path: string;
  name: string;
}


export function createSFSMenuData(noRoot = false): SFSMenuItem[] {
  const data = [
    {
      path: '/',
      name: 'Dashboard'
    },
    {
      path: '/dictionary/english-words',
      name: 'English dictionary'
    },
    {
      path: '/dictionary/transition-words',
      name: 'Transition words'
    },
    {
      path: '/dictionary/glossary',
      name: 'Glossary of terms'
    },
    {
      path: '/dictionary/js-interview-questions',
      name: 'JS interview questions'
    },
    {
      path: '/dictionary/ts-interview-questions',
      name: 'TS interview questions'
    },
    {
      path: '/free-dictionary',
      name: 'Free Dictionary'
    }
  ]

  if(noRoot) {
    return data.filter((e: SFSMenuItem) => {
      return e.path !== '/';
    });
  }
  return data;
}
