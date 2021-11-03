export const DictionaryMock : Dictionary = {
  title: 'MyDict',
  sections: [
    {
      title: 'First Section',
      groups: [
        {
          title: 'first group',
          subjects: [
            {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },
            {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },              {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },              {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },
          ]
        },
        {
          title: 'second group',
          subjects: [
            {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },
          ]
        },
      ]
    },
    {
      title: 'Second Section',
      groups: [
        {
          title: 'first group',
          subjects: [
            {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },              {
              subject: 'word',
              ru: 'пример',
              en: 'example'
            },
          ]
        }
      ]
    },
  ]
}

export class Subject {
  subject: string = '';
  ru: string = '';
  en: string = '';
  constructor(subject:string = '', ru:string = '', en: string = '') {
    this.subject = subject;
    this.ru = ru;
    this.en = en;
  }
}

export class SubjectGroup {
  title: string = '';
  subjects: Subject[] = [];
  constructor(title:string = '', subject:Subject[] = []) {
    this.title = title;
    this.subjects = subject;
  }
}

export class DictionarySection {
  title: string = '';
  groups: SubjectGroup[] = [];
  constructor(title:string = '', groups:SubjectGroup[] = []) {
    this.title = title;
    this.groups = groups;
  }
}

export class Dictionary {
  title: string = '';
  sections: DictionarySection[] = [];
  constructor(title:string = '', sections:DictionarySection[] = []) {
    this.title = title;
    this.sections = sections;
  }
}
