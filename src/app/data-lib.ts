export const DictionaryMock : Dictionary = {
  title: 'MyDict',
  sections: [
    {
      title: '6 Minute English',
      groups: [
        {
          title: 'Is punctuality important?',
          subjects: [
            {
              subject: 'punctuality',
              ru: '',
              en: 'the fact of doing something at an agreed time and being on time'
            },
            {
              subject: 'timekeeping',
              ru: '',
              en: 'ability to achieve things on time'
            },              {
              subject: 'time benders',
              ru: '',
              en: 'people who are always late because they don’t allow enough time to be somewhere'
            },              {
              subject: 'resistance',
              ru: '',
              en: 'being against something'
            },              {
              subject: 'deadlines',
              ru: '',
              en: 'fixed times when things must be completed by'
            },              {
              subject: 'consipcious',
              ru: '',
              en: 'easily noticed'
            },             {
              subject: 'awkward',
              ru: '',
              en: 'uncomfortable or nervous'
            },
          ]
        },
        {
          title: 'Could humans live in underwater cities?',
          subjects: [
            {
              subject: 'seabed',
              ru: '',
              en: 'solid surface of the earth that lies under the ocean, at least 1.8 kilometres underwater'
            },
            {
              subject: 'natural resources',
              ru: '',
              en: 'naturally existing things such as minerals, forests, coal and other energy sources that can be used by people'
            },
            {
              subject: 'vertically',
              ru: '',
              en: 'standing or pointing straight up and down at an angle 90 degrees, perpendicular to the ground, as opposed to horizontally parallel to the ground'
            },
            {
              subject: 'the bends',
              ru: '',
              en: 'decompression sickness - a serious medical sickness caused by nitrogen bubbles in the muscle tissues, resulting from return to the surface of the sea too quickly when diving'
            },
            {
              subject: 'physiologically',
              ru: '',
              en: 'relating to how the bodies of living humans and animals function'
            },
            {
              subject: 'atmospheric pressure',
              ru: '',
              en: 'the normal air pressure within the Earth’s atmosphere'
            },
          ]
        },
        {
          title: 'Could you be a victim of online fraud?',
          subjects: [
            {
              subject: 'mindset',
              ru: '',
              en: 'someone’s way of thinking and the general attitudes and opinions they have about something; mentality'
            },
            {
              subject: 'intelligence',
              ru: '',
              en: 'secret information about a person, government or country'
            },
            {
              subject: 'cover story',
              ru: '',
              en: 'false story someone tells in order to hide the truth'
            },
            {
              subject: 'data breach',
              ru: '',
              en: 'occasion when private information can be seen by people who should not be able to see it'
            },
            {
              subject: 'malware',
              ru: '',
              en: 'computer software and viruses that are designed to damage the way a computer works'
            },
            {
              subject: 'infiltrate',
              ru: '',
              en: 'secretly enter a group or organisation in order to spy on it or influence it'
            },
          ]
        },
        {
          title: 'No more bosses',
          subjects: [
            {
              subject: 'hierarchy',
              ru: '',
              en: 'system of organising people according to their level of importance'
            },
            {
              subject: 'coercion',
              ru: '',
              en: 'the use of force to persuade someone to do something they do not want to do'
            },
            {
              subject: 'commitment',
              ru: '',
              en: 'a promise or firm decision to do something'
            },
            {
              subject: 'left behind',
              ru: '',
              en: 'remain at a lower level than others because you are not as quick to improve, develop or progress'
            },
            {
              subject: 'take full advantage (of)',
              ru: '',
              en: 'make good use of an opportunity to progress or achieve a goal'
            },
            {
              subject: 'be held accountable',
              ru: '',
              en: 'accept responsibility for the consequences of your actions'
            },
          ]
        },
      ]
    },
    {
      title: 'Transitional Devices',
      groups: [
        {
          title: 'TO ADD',
          subjects: [
            {
              subject: 'and',
              ru: '',
              en: ''
            },
            {
              subject: 'again',
              ru: '',
              en: ''
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
