import { Dictionary } from "sfs-data-model";

export const RuUkPhrasebookData : Dictionary = {
  title: 'Russian-Ukranian Phrasebook',
  version: 2,
  sections: [
    {
      title: "Общение",
      groups: [
        {
          title: "Приветствие / Biтання",
          subjects: [
            {
              subject: 'Доброе утро!',
              uk: 'Доброго ранку!'
            },
            {
              subject: "Добрый день!",
              uk: "Добри день!"
            },
            {
              subject: "Добрый вечер!",
              uk: "Добри вечiр!"
            },
            {
              subject: "Привет!",
              uk: "Привiт!"
            },
            {
              subject: "Добро пожаловать!",
              uk: "Ласкаво просимо!"
            },
            {
              subject: "Позвольте представиться!",
              uk: "Дозвольте представитися!"
            },
            {
              subject: "Как вас зовут?",
              uk: "Як вас звуть?"
            }
          ]
        }
      ]
    }
  ]
}
