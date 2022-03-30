import { Dictionary } from "sfs-data-model"
import {
  tsQuestions1,
  tsQuestions2,
  tsQuestions3,
  tsQuestions4,

} from './ts-questions';

export function tsQuestionsData():Dictionary {

  let data:Dictionary =  {
    title: 'TsQuestions',
    version: 1,
    sections: [
      {
        title: 'Questions',
        groups: [
          {
            title: "Based on https://habr.com/ru/post/484546/",
            subjects: []
          },
          {
            title: "Based on https://ichi.pro/ru/50-sloznyh-voprosov-na-sobesedovanii-po-typescript-183688010261008",
            subjects: []
          },
          {
            title: "Based on https://www.interviewhelper.org/ru/question/typescript-voprosy-na-sobesedovanie",
            subjects: []
          },
          {
            title: "Based on https://habr.com/ru/company/ruvds/blog/419993/",
            subjects: []
          },
        ]
      },
    ]
  }

  tsQuestions1.forEach((e: string) => {
    data.sections[0].groups[0].subjects.push({
      subject: e.slice(0,e.indexOf('?')).substring(2) + '?',
      ru: e.substring(e.indexOf('?') + 1, e.length),
      en: ''
    })
  })
  tsQuestions2.forEach((e: string) => {
    data.sections[0].groups[1].subjects.push({
      subject: e.slice(0,e.indexOf('?')).substring(2) + '?',
      ru: e.substring(e.indexOf('?') + 1, e.length),
      en: ''
    })
  })
  tsQuestions3.forEach((e: string) => {
    data.sections[0].groups[2].subjects.push({
      subject: e.slice(0,e.indexOf('?')).substring(2) + '?',
      ru: e.substring(e.indexOf('?') + 1, e.length),
      en: ''
    })
  })
  tsQuestions4.forEach((e: string) => {
    data.sections[0].groups[3].subjects.push({
      subject: e.slice(0,e.indexOf('?')).substring(2) + '?',
      ru: e.substring(e.indexOf('?') + 1, e.length),
      en: ''
    })
  })

  return data;
}
