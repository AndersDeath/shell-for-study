import { Dictionary } from "sfs-data-model";

export const RuEsPhrasebookData : Dictionary = {
  title: 'Russian-Spanish Phrasebook',
  version: 1,
  sections: [
    {
      title: "Общение",
      groups: [
        {
          title: "Приветствие",
          subjects: [
            {
              subject: 'Привет',
              es: '¡Hola!'
            },
            {
              subject: 'Здравствуйте / Доброе утро',
              es: '¡Buenas días!'
            }
          ]
        }
      ]
    }
  ]
}
