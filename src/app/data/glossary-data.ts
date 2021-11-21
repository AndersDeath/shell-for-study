import { Dictionary } from "./data-lib";

export const GlossaryData : Dictionary = {
  title: 'Glossary',
  version: 1,
  sections: [
    {
      title: 'Programming',
      groups: [
        {
          title: "Main terms",
          subjects: [
            {
              subject: "Functional programming",
              ru: "Парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).",
              en: "It is a programming paradigm where values are passed around into functions, and those functions are themselves values. Functional programmers often try to make large parts of their code referentially transparent."
            }
          ]
        },
      ]
    },
  ]
}
