
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
