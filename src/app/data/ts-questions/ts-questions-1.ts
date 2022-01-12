export const tsQuestions1 =[`## 1. Для чего нужен тип «Omit»?

**Ответ:** Это тип, в котором можно указать свойства, которые будут исключены из исходного типа.

**Пример:**

\`\`\`typescript
type Person = { name: string; age: number; location: string; };
type QuantumPerson = Omit<Person, 'location'>; // Аналогично следующей строке
QuantumPerson = { name: string; age: number; };
\`\`\``,`## 2. Когда нужно использовать ключевое слово «declare»?

**Ответ:** При использовании библиотеки JavaScript, не объявленной в вашем TypeScript-проекте.

**Пример:**

\`\`\`typescript
declare const libraryName;
\`\`\``,`## 3. Как автоматически получить файлы declaration?

**Ответ:** Установить опцию компилятора на true в файле tsconfig.json

**Пример:**

\`\`\`typescript
{
"compilerOptions": {
    ...
    "declaration": true,
  }
}
\`\`\``,`## 4. Как перегрузить функцию?

**Ответ:** Надо использовать то же имя функции над оригинальной функцией без скобок {} и изменить число и типы аргументов и/или тип возвращаемого значения.

**Пример:**

\`\`\`typescript
function add(x: string, y: string): string;
function add(x: number, y: number): number {
  return x + y;
}
\`\`\``,`## 5. Как сделать все свойства интерфейса необязательными?

**Ответ:** Используйте тип Partial

**Пример:**

\`\`\`typescript

interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>; // Аналогично следующему коду

linesinterface PartialPerson {
  name?: string;
  age?: number;
}

\`\`\``,`## 6. К чему можно применять декораторы?
**Ответ:** Классы, свойства, методы и аргументы метода.

**Пример:**

\`\`\`typescript
@MyClassDecorator
export class Person {
    …
    @MyPropertyDecorator myProperty: string;
}
\`\`\``,`## 7. Для чего нужен тип «Record»?
**Ответ:** Он позволяет создавать типизированную мапу

**Пример:**

\`\`\`typescript
let Person = Record<string, number> = {};
Person.age = 25;
\`\`\``,`## 8. Как можно получить доступ к классам вне модуля, в котором они определены?

**Ответ:** Используйте ключевое слово export перед именем класса.

**Пример:**

\`\`\`typescript
export class Person {}
\`\`\``,`## 9. Когда используется ключевое слово «unknown»?

**Ответ:** Когда вы не хотите использовать ключевое слово any и/или заранее не знаете точный тип, но хотите назначить его позже.

**Пример:**

\`\`\`typescript
let person: unknown = 'John';
if (typeof person === string) {
  let name: string = person;
}
\`\`\``,`## 10. Что такое «.map» файл, как и зачем его использовать?

**Ответ:** Map-файл — это файл карты исходников, который можно использовать при выполнении отладки. Его можно сгенерировать, установив опцию компилятора sourceMap в true в файле tsconfig.json

**Пример:**

\`\`\`typescript
{
"compilerOptions": {
    ...
    "sourceMap": true,
  }
}
\`\`\``]
