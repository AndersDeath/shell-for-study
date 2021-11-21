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
            },
            {
              subject: "SOLID",
              ru: "",
              en: `
              It is an acronym (short name) for a group of five good principles (rules) in computer programming. SOLID allows programmers to write code that is easier to understand and change later on. Solid is often used with systems that use an object-oriented design.

              SOLID was promoted by Robert C. Martin but the name itself was created by Michael Feathers.

              * Single **responsibility** principle - Class has one job to do. Each change in requirements can be done by changing just one class.
              * **Open/closed** principle - Class is happy (open) to be used by others. Class is not happy (closed) to be changed by others.
              * Liskov **substitution** principle - Class can be replaced by any of its children. Children classes inherit parent's behaviours.
              * **Interface segregation** principle - When classes promise each other something, they should separate these promises (interfaces) into many small promises, so it's easier to understand.
              * **Dependency** inversion principle - When classes talk to each other in a very specific way, they both depend on each other to never change. Instead classes should use promises (interfaces, parents), so classes can change as long as they keep the promise.`
            }
          ]
        },
      ]
    },
  ]
}
