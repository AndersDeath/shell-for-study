import { Dictionary } from "./data-lib"

export const jsQuestoinsArray =[`## 1.  В чем разница между null и undefined?
Для начала давайте поговорим о том, что у них общего.

Во-первых, они принадлежат к 7 «примитивам» (примитивным типам) JS:

\`\`\`javascript
let primitiveTypes = ['string', 'number', 'null', 'undefined', 'boolean', 'symbol', 'bigint']
\`\`\`
Во-вторых, они являются ложными значениями, т.е. результатом их преобразования в логическое значение с помощью Boolean()
или оператора "!!" является false:
\`\`\`javascript
console.log(!!null) // false
console.log(!!undefined) // false

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
\`\`\`
Ладно, теперь о различиях.

undefined («неопределенный») представляет собой значение по умолчанию:
* переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;
* функции, которая ничего не возвращает явно, например, console.log(1);
* несуществующего свойства объекта.

В указанных случаях движок JS присваивает значение undefined.

\`\`\`javascript
let _thisIsUndefined
const doNothing = () => {}
const someObj = {
    a: 'ay',
    b: 'bee',
    c: 'si'
}
console.log(_thisIsUndefined) // undefined
console.log(doNothing()) // undefined
console.log(someObj['d']) // undefined

\`\`\`
null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно. В примере ниже
мы получаем null, когда метод fs.readFile отрабатывает без ошибок:

\`\`\`javascript
fs.readFile('path/to/file', (e, data) => {
    console.log(e) // здесь мы получаем null
if(e) {
    console.log(e)
}
    console.log(data)
})
\`\`\`
При сравнении null и undefined мы получаем true, когда используем оператор "\=\=", и false при использовании оператора
"===". О том, почему так происходит, см. ниже.

\`\`\`javascript
console.log(null == undefined) // true
console.log(null === undefined) // false
\`\`\``,`## 2. Для чего используется оператор "&&"?

Оператор "&&" (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные.
 Он использует короткое замыкание во избежание лишних затрат:
\`\`\`javascript
console.log(false && 1 && []) // false
console.log(' ' && true && 5) // 5
\`\`\`
С оператором «if»:
\`\`\`javascript
const router: Router = Router()

router.get('/endpoint', (req: Request, res: Response) => {
    let conMobile: PoolConnection
    try {
        // операции с базой данных
    } catch (e) {
        if (conMobile) {
            conMobile.release()
        }
    }
})
\`\`\`
То же самое с оператором "&&":
\`\`\`javascript
const router: Router = Router()

router.get('/endpoint', (req: Request, res: Response) => {
    let conMobile: PoolConnection
    try {
        // операции с базой данных
    } catch (e) {
        conMobile && conMobile.release()
    }
})
\`\`\``,`## 3. Для чего используется оператор "||"?

Оператор "||" (логическое или) находит и возвращает первое истинное значение. Он также использует короткое замыкание.
 Данный оператор использовался для присвоения параметров по умолчанию в функциях до того, как параметры по умолчанию были стандартизированы в ES6.

\`\`\`javascript
console.log(null || 1 || undefined) // 1

function logName(name) {
    let n = name || Mark
    console.log(n)
}

logName() // Mark
\`\`\``,`## 4. Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки
в число?

Согласно MDN оператор "+" действительно является самым быстрым способом преобразования строки в число, поскольку он не
 выполняет никаких операций со значением, которое является числом.`,`## 5. Что такое DOM?

DOM или Document Object Model (объектная модель документа) — это прикладной программный интерфейс (API) для работы с HTML
 и XML документами. Когда браузер первый раз читает («парсит») HTML документ, он формирует большой объект, действительно
 большой объект, основанный на документе — DOM. DOM представляет собой древовидную структуру (дерево документа).
 DOM используется для взаимодействия и изменения самой структуры DOM или его отдельных элементов и узлов.

Допустим, у нас есть такой HTML:

\`\`\`html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document Object Model</title>
</head>

<body>
    <div>
        <p>
            <span></span>
        </p>
        <label></label>
        <input>
    </div>
</body>

</html>
\`\`\`

DOM этого HTML выглядит так:
![alt text](./1.png)

В JS DOM представлен объектом Document. Объект Document имеет большое количество методов для работы с элементами,
их созданием, модификацией, удалением и т.д.`,`## 6. Что такое распространение события (Event Propagation)?

Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем. Событие
«распространяется» от объекта Window до вызвавшего его элемента (event.target). При этом событие последовательно
пронизывает (затрагивает) всех предков целевого элемента. Распространение события имеет три стадии или фазы:

* Фаза погружения (захвата, перехвата) — событие возникает в объекте Window и опускается до цели события через
всех ее предков.
* Целевая фаза — это когда событие достигает целевого элемента.
* Фаза всплытия — событие поднимается от event.target, последовательно проходит через всех его предков и достигает
 объекта Window.
![alt text](./2.png)

Подробнее о распространении событий можно почитать [здесь](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
и [здесь](https://learn.javascript.ru/bubbling-and-capturing).`,`## 7. Что такое всплытие события?

Когда событие происходит в элементе DOM, оно затрагивает не только этот элемент. Событие «всплывает» (подобно
  пузырьку воздуха в воде), переходит от элемента, вызвавшего событие (event.target), к его родителю, затем поднимается
  еще выше, к родителю родителя элемента, пока не достигает объекта Window.

Допустим, у нас есть такая разметка:

\`\`\`html
<div class="grandparent">
    <div class="parent">
        <div class="child">1</div>
    </div>
</div>
\`\`\`
И такой JS:

\`\`\`javascript

function addEvent(el, event, callback, isCapture = false) {
    if (!el || !event || !callback || typeof callback !== 'function') return

    if (typeof el === 'string') {
        el = document.querySelector(el)
    }
    el.addEventListener(event, callback, isCapture)
}

addEvent(document, 'DOMContentLoaded', () => {
    const child = document.querySelector('.child')
    const parent = document.querySelector('.parent')
    const grandparent = document.querySelector('.grandparent')

    addEvent(child, 'click', function(e) {
        console.log('child')
    })

    addEvent(parent, 'click', function(e) {
        console.log('parent')
    })

    addEvent(grandparent, 'click', function(e) {
        console.log('grandparent')
    })

    addEvent('html', 'click', function(e) {
        console.log('html')
    })

    addEvent(document, 'click', function(e) {
        console.log('document')
    })

    addEvent(window, 'click', function(e) {
        console.log('window')
    })
})
\`\`\`

У метода addEventListener есть третий необязательный параметр — useCapture. Когда его значение равняется false
(по умолчанию), событие начинается с фазы всплытия. Когда его значение равняется true, событие начинается с фазы
 погружения (для «прослушивателей» событий, прикрепленных к цели события, событие находится в целевой фазе, а
  не в фазах погружения или всплытия. События в целевой фазе инициируют все прослушиватели на элементе в том
  порядке, в котором они были зарегистрированы независимо от параметра useCapture — прим. пер.). Если мы кликнем
   по элементу child, в консоль будет выведено: child, parent, grandparent, html, document, window. Вот что такое
   всплытие события.`,`## 8. Что такое погружение события?

Когда событие происходит в элементе DOM, оно происходит не только в нем. В фазе погружения событие опускается от
 объекта Window до цели события через всех его предков.

Разметка:

\`\`\`html
<div class="grandparent">
    <div class="parent">
        <div class="child">1</div>
    </div>
</div>
\`\`\`
JS:

\`\`\`javascript
function addEvent(el, event, callback, isCapture = false) {
    if (!el || !event || !callback || typeof callback !== 'function') return

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }
    el.addEventListener(event, callback, isCapture)
}

addEvent(document, 'DOMContentLoaded', () => {
    const child = document.querySelector('.child')
    const parent = document.querySelector('.parent')
    const grandparent = document.querySelector('.grandparent')

    addEvent(child, 'click', function(e) {
        console.log('child');
    }, true)

    addEvent(parent, 'click', function(e) {
        console.log('parent')
    }, true)

    addEvent(grandparent, 'click', function(e) {
        console.log('grandparent')
    }, true)

    addEvent('html', 'click', function(e) {
        console.log('html')
    }, true)

    addEvent(document, 'click', function(e) {
        console.log('document')
    }, true)

    addEvent(window, 'click', function(e) {
        console.log('window')
    }, true)
})
\`\`\`
У метода addEventListener есть третий необязательный параметр — useCapture. Когда его значение равняется false
(по умолчанию), событие начинается с фазы всплытия. Когда его значение равняется true, событие начинается с фазы
погружения. Если мы кликнем по элементу child, то увидим в консоли следующее: window, document, html, grandparent,
parent, child. Это и есть погружение события.`,`## 9. В чем разница между методами event.preventDefault() и event.stopPropagation()?

Метод event.preventDefault() отключает поведение элемента по умолчанию. Если использовать этот метод в элементе
form, то он предотвратит отправку формы (submit). Если использовать его в contextmenu, то контекстное меню будет
отключено (данный метод часто используется в keydown для переопределения клавиатуры, например, при создании
  музыкального/видео плеера или текстового редактора — прим. пер.). Метод event.stopPropagation() отключает
  распространение события (его всплытие или погружение).`,`## 10. Как узнать об использовании метода event.preventDefault()?

Для этого мы можем использовать свойство event.defaulPrevented, возвращающее логическое значение, служащее индикатором
применения к элементу метода event.preventDefault.`,`## 11. Почему obj.someprop.x приводит к ошибке?

\`\`\`javascript
const obj = {}
console.log(obj.someprop.x)
\`\`\`
Ответ очевиден: мы пытается получить доступ к свойству x свойства someprop, которое имеет значение undefined.
obj.__proto__.__proto = null, поэтому возвращается undefined, а у undefined нет свойства x.`,`## 12. Что такое цель
события или целевой элемент (event.target)?

Простыми словами, event.target — это элемент, в котором происходит событие, или элемент, вызвавший событие.

Имеем такую разметку:

\`\`\`html
<div onclick="clickFunc(event)" style="text-align: center; margin: 15px;
border: 1px solid red; border-radius: 3px;">
    <div style="margin: 25px; border: 1px solid royalblue; border-radius: 3px;">
        <div style="margin: 25px; border: 1px solid skyblue; border-radius: 3px;">
            <button style="margin: 10px">
                Button
            </button>
        </div>
    </div>
</div>
\`\`\`
И такой простенький JS:

\`\`\`javascript
function clickFunc(event) {
    console.log(event.target)
}
\`\`\`


Мы прикрепили «слушатель» к внешнему div. Однако если мы нажмем на кнопку, то получим в консоли разметку этой кнопки.
 Это позволяет сделать вывод, что элементом, вызвавшим событие, является именно кнопка, а не внешний или внутренние div.`,
 `## 13. Что такое текущая цель события (event.currentTarget)?


Event.currentTarget — это элемент, к которому прикреплен прослушиватель событий.

Аналогичная разметка:

\`\`\`html
<div onclick="clickFunc(event)" style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;">
    <div style="margin: 25px; border:1px solid royalblue;border-radius:3px;">
        <div style="margin:25px;border:1px solid skyblue;border-radius:3px;">
            <button style="margin:10px">
                Button
            </button>
        </div>
    </div>
</div>
\`\`\`
И немного видоизмененный JS:

\`\`\`javascript
function clickFunc(event) {
    console.log(event.currentTarget)
}
\`\`\`
Мы прикрепили слушатель к внешнему div. Куда бы мы ни кликнули, будь то кнопка или один из внутренних div, в
консоли мы всегда получим разметку внешнего div. Это позволяет заключить, что event.currentTarget — это элемент,
к которому прикреплен прослушиватель событий.`,`## 14. В чем разница между операторами "\=\=" и "==="?

Разница между оператором "==" (абстрактное или нестрогое равенство) и оператором "===" (строгое равенство)
состоит в том, что первый сравнивает значения после их преобразования или приведения к одному типу (Coersion),
 а второй — без такого преобразования.

Давайте копнем глубже. И сначала поговорим о преобразовании.

Преобразование представляет собой процесс приведения значения к другому типу или, точнее, процесс приведения
 сравниваемых значений к одному типу. При сравнении оператор "==" производит так называемое неявное сравнение.
  Оператор "==" выполняет некоторые операции перед сравнением двух значений.

Допустим, мы сравниваем x и y.

Алгоритм следующий:

1. Если x и y имеют одинаковый тип, сравнение выполняется с помощью оператора "===".
2. Если x = null и y = undefined возвращается true.
3. Если x = undefined и y = null возвращается true.
4. Если x = число, а y = строка, возвращается x == toNumber(y) (значение y преобразуется в число).
5. Если x = строка, а y = число, возвращается toNumber(x) == y (значение x преобразуется в число).
6. Если x = логическое значение, возвращается toNumber(x) == y.
7. Если y = логическое значение, возвращается x == toNumber(y).
8. Если x = строка, символ или число, а y = объект, возвращается x == toPrimitive(y) (значение y преобразуется в примитив).
9. Если x = объект, а y = строка, символ или число, возвращается toPrimitive(x) == y.
10. Возвращается false.

Запомните: для приведения объекта к «примитиву» метод toPrimitive сначала использует метод valueOf, затем метод toString.

Примеры:

![alt text](./3.png)

Все примеры возвращают true.

Первый пример — первое условие алгоритма.
Второй пример — четвертое условие.
Третий — второе.
Четвертый — седьмое.
Пятый — восьмое.
И последний — десятое.

![alt text](./4.png)

Если же мы используем оператор "===" все примеры, кроме первого, вернут false, поскольку значения в этих примерах
имеют разные типы.`,`## 15. Почему результатом сравнения двух похожих объектов является false?

\`\`\`javascript
let a = {
    a: 1
}
let b = {
    a: 1
}
let c = a

console.log(a === b) // false
console.log(a === c) // true хм...
\`\`\`

В JS объекты и примитивы сравниваются по-разному. Примитивы сравниваются по значению. Объекты — по ссылке или адресу
 в памяти, где хранится переменная. Вот почему первый console.log возвращает false, а второй — true. Переменные «a» и
 «c» ссылаются на один объект, а переменные «a» и «b» — на разные объекты с одинаковыми свойствами и значениями.`,
 `## 16. Для чего используется оператор "!!"?

Оператор "!!" (двойное отрицание) приводит значение справа от него к логическому значению.

\`\`\`javascript
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!'') // false
console.log(!!0) // false
console.log(!!NaN) // false
console.log(!!' ') // true
console.log(!!{}) // true
console.log(!![]) // true
console.log(!!1) // true
console.log(!![].length) // false
\`\`\``,`## 17. Как записать несколько выражений в одну строку?
Для этого мы можем использовать оператор "," (запятая). Этот оператор «двигается» слева направо и возвращает значение
последнего выражения или операнда.

\`\`\`javascript
let x = 5

x = (x++, x = addFive(x), x *= 2, x -= 5, x += 10)

function addFive(num) {
    return num + 5
}
\`\`\`
Если мы выведем значение x в консоль, то получим 27. Сначала мы увеличиваем значение x на единицу (x = 6).
 Затем вызываем функцию addFive() с параметром 6, к которому прибавляем 5 (x = 11). После этого мы умножаем значение
  x на 2 (x = 22). Затем вычитаем 5 (x = 17). И, наконец, прибавляем 10 (x = 27).`,`## 18. Что такое поднятие (Hoisting)?

Поднятие — это термин, описывающий подъем переменной или функции в глобальную или функциональную области видимости.

Для того, чтобы понять, что такое Hoisting, необходимо разобраться с тем, что представляет собой контекст выполнения.

Контекст выполнения — это среда, в которой выполняется код. Контекст выполнения имеет две фазы — компиляция и собственно выполнение.

Компиляция. В этой фазе функциональные выражения и переменные, объявленные с помощью ключевого слова «var», со значением
 undefined поднимаются в самый верх глобальной (или функциональной) области видимости (как бы перемещаются в начало нашего кода. Это объясняет, почему мы можем вызывать функции до их объявления — прим. пер.).

Выполнение. В этой фазе переменным присваиваются значения, а функции (или методы объектов) вызываются или выполняются.

Запомните: поднимаются только функциональные выражения и переменные, объявленные с помощью ключевого слова «var». Обычные
 функции и стрелочные функции, а также переменные, объявленные с помощью ключевых слов «let» и «const» не поднимаются.

Предположим, что у нас есть такой код:

\`\`\`javascript
console.log(y)
y = 1
console.log(y)
console.log(greet('Mark'))

function greet(name) {
    return 'Hello ' + name + '!'
}

var y
\`\`\`
Получаем undefined, 1 и 'Hello Mark!'.

Вот как выглядит фаза компиляции:

\`\`\`javascript
function greet(name) {
    return 'Hello ' + name + '!'
}

var y // присваивается undefined

// ожидается завершение фазы компиляции

// затем начинается фаза выполнения
/*
console.log(y)
y = 1
console.log(y)
console.log(greet('Mark'))
*/
\`\`\`

После завершения фазы компиляции начинается фаза выполнения, когда переменным присваиваются значения и вызываются функции.

Дополнительно о Hoisting можно почитать [здесь](https://developer.mozilla.org/ru/docs/Glossary/Hoisting).`,`## 19. Что такое область видимости (Scope)?

Область видимости — это место, где (или откуда) мы имеем доступ к переменным или функциям. JS имеем три типа областей видимости: глобальная, функциональная и блочная (ES6).

Глобальная область видимости — переменные и функции, объявленные в глобальном пространстве имен, имеют глобальную область видимости и доступны из любого места в коде.

\`\`\`javascript
// глобальное пространство имен
var g = 'global'

function globalFunc() {
    function innerFunc() {
        console.log(g) // имеет доступ к переменной g, поскольку она является глобальной
    }
    innerFunc()
}
\`\`\`

Функциональная область видимости (область видимости функции) — переменные, функции и параметры, объявленные внутри функции, доступны только внутри этой функции.

\`\`\`javascript

function myFavouriteFunc(a) {
    if (true) {
        var b = 'Hello ' + a
    }
    return b
}
myFavouriteFunc('World')

console.log(a) // Uncaught ReferenceError: a is not defined
console.log(b) // не выполнится
\`\`\`

Блочная область видимости — переменные (объявленные с помощью ключевых слов «let» и «const») внутри блока ({ }), доступны только внутри него.

\`\`\`javascript
function testBlock() {
    if (true) {
        let z = 5
    }
    return z
}

testBlock() // Uncaught ReferenceError: z is not defined
\`\`\`
Область видимости — это также набор правил, по которым осуществляется поиск переменной. Если переменной не существует в текущей области видимости, ее поиск производится выше, во внешней по отношению к текущей области видимости. Если и во внешней области видимости переменная отсутствует, ее поиск продолжается вплоть до глобальной области видимости. Если в глобальной области видимости переменная обнаружена, поиск прекращается, если нет — выбрасывается исключение. Поиск осуществляется по ближайшим к текущей областям видимости и останавливается с нахождением переменной. Это называется цепочкой областей видимости (Scope Chain).

\`\`\`javascript
// цепочка областей видимости
// внутренняя область видимости -> внешняя область видимости -> глобальная область видимости

// глобальная область видимости
var variable1 = 'Comrades'
var variable2 = 'Sayonara'

function outer() {
    // внешняя область видимости
    var variable1 = 'World'

    function inner() {
        // внутренняя область видимости
        var variable2 = 'Hello'
        console.log(variable2 + ' ' + variable1)
    }
    inner()
}
outer()
// в консоль выводится 'Hello World',
// потому что variable2 = 'Hello' и variable1 = 'World' являются ближайшими
// к внутренней области видимости переменными
\`\`\`

![alt text](5.png)`,`## 20. Что такое замыкание (Closures)?

Наверное, это самый сложный вопрос из списка. Я постараюсь объяснить, как я понимаю замыкание.

По сути, замыкание — это способность функции во время создания запоминать ссылки на переменные и параметры, находящиеся в текущей области видимости, в области видимости родительской функции, в области видимости родителя родительской функции и так до глобальной области видимости с помощью цепочки областей видимости. Обычно область видимости определяется при создании функции.

Примеры — отличный способ объяснить замыкание:

\`\`\`javascript
// глобальная область видимости
var globalVar = 'abc'

function a() {
    // область видимости функции
    console.log(globalVar)
}

a() // 'abc'
// цепочка областей видимости
// область видимости функции a -> глобальная область видимости
\`\`\`
В данном примере, когда мы объявляем функцию, глобальная область видимости является частью замыкания.
![alt text](6.png)

Переменная «globalVar» не имеет значения на картинке, потому что ее значение может меняться в зависимости от того, где и когда будет вызвана функция. Но в примере выше globalVar будет иметь значение «abc».

Теперь пример посложнее:

\`\`\`javascript
var globalVar = 'global'
var outerVar = 'outer'

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam)
    }
    return innerFunc
}

const x = outerFunc(outerVar)
outerVar = 'outer-2'
globalVar = 'guess'
x('inner')
\`\`\`
![alt text](7.png)

В результате получаем «guess outer inner». Объяснение следующее: когда мы вызываем функцию outerFunc и присваиваем переменной «x» значение, возвращаемое функцией innerFunc, параметр «outerParam» равняется «outer». Несмотря на то, что мы присвоили переменной «outerVar» значение «outer-2», это произошло после вызова функции outerFunc, которая «успела» найти значение переменной «outerVar» в цепочке областей видимости, этим значением было «outer». Когда мы вызываем «x», которая ссылается на innerFunc, значением «innerParam» является «inner», потому что мы передаем это значение в качестве параметра при вызове «x». globalVar имеет значение «guess», потому что мы присвоили ей это значение перед вызовом «x».

Пример неправильного понимания замыкания.

\`\`\`javascript
const arrFunc = []
for (var i = 0; i < 5; i++) {
    arrFunc.push(function() {
        return i
    })
}
console.log(i) // 5

for (let i = 0; i < arrFunc.length; i++) {
    console.log(arrFunc[i]()) // все 5
}
\`\`\`
Данный код работает не так, как ожидается. Объявление переменной с помощью ключевого слова «var» делает эту переменную глобальной. После добавления функций в массив «arrFunc» значением глобальной переменной «i» становится «5». Поэтому когда мы вызываем функцию, она возвращает значение глобальной переменной «i». Замыкание хранит ссылку на переменную, а не на ее значение во время создания. Эту проблему можно решить, используя IIFE или объявив переменную с помощью ключевого слова «let».

Подробнее о замыкании можно почитать [здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures) и [здесь](https://learn.javascript.ru/closure).`,`## 21. Какие значения в JS являются ложными?

\`\`\`javascript
const falsyValues = ['', 0, null, undefined, NaN, false]
\`\`\`
Ложными являются значения, результатом преобразования которых в логическое значение является false.`,`## 22. Как проверить, является ли значение ложным?

Следует использовать функцию Boolean или оператор "!!" (двойное отрицание).`,`## 23. Для чего используется директива «use strict»?

«use strict» — это директива ES5, которая заставляет весь наш код или код отдельной функции выполняться в строгом режиме. Строгий режим вводит некоторые ограничения по написанию кода, тем самым позволяя избегать ошибок на ранних этапах.

Вот какие ограничения накладывает строгий режим.

Нельзя присваивать значения или обращаться к необъявленным переменным:

\`\`\`javascript
function returnY() {
    'use strict'
    y = 123
    return y
}
returnY() // Uncaught ReferenceError: y is not defined
\`\`\`
Запрещено присваивать значения глобальный переменным, доступным только для чтения или записи:
\`\`\`javascript
'use strict'
var NaN = NaN // Uncaught TypeError: Cannot assign to read only property 'NaN' of object '#<Window>'
var undefined = undefined
var Infinity = 'and beyond'
\`\`\`
Нельзя удалить «неудаляемое» свойство объекта:

\`\`\`javascript
'use strict'
const obj = {}

Object.defineProperties(obj, 'x', {
    value: 1
})

delete obj.x // Uncaught TypeError: Property description must be an object: x
\`\`\`
Запрещено дублирование параметров:

\`\`\`javascript
'use strict'

function someFunc(a, b, b, c) {} // Uncaught SyntaxError: Duplicate parameter name not allowed in this context
\`\`\`

Нельзя создавать функции с помощью функции eval:
\`\`\`javascript
'use strict'

eval('var x = 1')

console.log(x) // Uncaught ReferenceError: x is not defined
\`\`\`

Значением «this» по умолчанию является undefined:

\`\`\`javascript
'use strict'

function showMeThis() {
    return this
}

showMeThis() // undefined
\`\`\`
… и т.д.`,`## 24. Какое значение имеет this?

Обычно this ссылается на значение объекта, который в данный момент выполняет или вызывает функцию. «В данный момент» означает, что значение this меняется в зависимости от контекста выполнения, от того места, где мы используем this.

\`\`\`javascript
const carDetails = {
    name: 'Ford Mustang',
    yearBought: 2005,
    getName() {
        return this.name
    }
    isRegistered: true
}

console.log(carDetails.getName()) // Ford Mustang
\`\`\`

В данном случае метод getName возвращает this.name, а this ссылается на carDetails, объект, в котором выполняется getName, который является ее «владельцем».

Добавим после console.log три строчки:
\`\`\`javascript
var name = 'Ford Ranger'
var getCarName = carDetails.getName

console.log(getCarName()) // Ford Ranger
\`\`\`


Второй console.log выдает Ford Ranger, и это странно. Причина такого поведения заключается в том, что «владельцем» getCarName является объект window. Переменные, объявленные с помощью ключевого слова «var» в глобальной области видимости, записываются в свойства объекта window. this в глобальной области видимости ссылается на объект window (если речь не идет о строгом режиме).
\`\`\`javascript
console.log(getCarName === window.getCarName) // true
console.log(getCarName === this.getCarName) // true
\`\`\`

В этом примере this и window ссылаются на один объект.

Одним из способов решения данной проблемы является использование методов call или apply:

\`\`\`javascript
console.log(getCarName.apply(carDetails)) // Ford Mustang
console.log(getCarName.call(carDetails)) // Ford Mustang
\`\`\`

Call и apply принимают в качестве первого аргумента объект, который будет являться значением this внутри функции.

В IIFE, функциях, которые создаются в глобальном области видимости, анонимных функциях и внутренних функциях методов объекта значением this по умолчанию является объект window.
\`\`\`javascript
(function() {
    console.log(this)
})() // window

function iHateThis() {
    console.log(this)
}
iHateThis() // window

const myFavouriteObj = {
    guessThis() {
        function getName() {
            console.log(this.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}

myFavouriteObj.guessThis() // window
myFavouriteObj.thisIsAnnoying(function() {
    console.log(this) // window
})
\`\`\`

Существует два способа получить «Marko Polo».

Во-первых, мы можем сохранить значение this в переменной:

\`\`\`javascript
const myFavoriteObj = {
    guessThis() {
        const self = this // сохраняем значение this в переменной self
        function getName() {
            console.log(self.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}
\`\`\`
Во-вторых, мы можем использовать стрелочную функцию:
\`\`\`javascript
const myFavoriteObj = {
    guessThis() {
        const getName = () => {
            // копируем значение this из внешнего окружения
            console.log(this.name)
        }
        getName()
    },
    name: 'Marko Polo',
    thisIsAnnoying(callback) {
        callback()
    }
}
\`\`\`
Стрелочные функции не имеют собственного значения this. Они копируют значение this из внешнего лексического окружения.`,`## 25. Что такое прототип объекта?

В двух словах, прототип — это план (схема или проект) объекта. Он используется как запасной вариант для свойств и методов, существующих в данном объекте. Это также один из способов обмена свойствами и функциональностью между объектами. Это основная концепция прототипного наследования в JS.
\`\`\`javascript
const o = {}
console.log(o.toString()) // [object Object]
\`\`\`
Несмотря на то, что объект «о» не имеет свойства toString, обращение к этому свойству не вызывает ошибки. Если определенного свойства нет в объекте, его поиск осуществляется сначала в прототипе объекта, затем в прототипе прототипа объекта и так до тех пор, пока свойство не будет найдено. Это называется цепочкой прототипов. На вершине цепочки прототипов находится Object.prototype.
\`\`\`javascript
console.log(o.toString === Object.prototype.toString) // true
\`\`\`
Подробнее о прототипах и наследовании можно почитать [здесь](https://learn.javascript.ru/prototype-inheritance) и [здесь](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).`,`## 26. Что такое IIFE?

IIFE или Immediately Invoked Function Expression — это функция, которая вызывается или выполняется сразу же после создания или объявления. Для создания IIFE необходимо обернуть функцию в круглые скобки (оператор группировки), превратив ее в выражение, и затем вызвать ее с помощью еще одних круглых скобок. Это выглядит так: (function(){})().

\`\`\`javascript
(function( ) { }( ))

(function( ) { })( )

(function named(params) { })( )

(( ) => { })

(function(global) { })(window)

const utility = (function( ) {
    return {
        // утилиты
    }
})
\`\`\`
Все эти примеры являются валидными. Предпоследний пример показывает, что мы можем передавать параметры в IIFE. Последний пример показывает, что мы можем сохранить результат IIFE в переменной.

Лучшее использование IIFE — это выполнение функций настройки инициализации и предотвращение конфликтов имен с другими переменными в глобальной области видимости (загрязнение глобального пространства имен). Приведем пример.
\`\`\`html
<script src="https://cdnurl.com/somelibrary.js"></script>
\`\`\`
У нас есть ссылка на библиотеку somelibrary.js, которая предоставляет некоторые глобальные функции, которые мы можем использовать в нашем коде, но в этой библиотеке есть два метода, createGraph и drawGraph, которые мы не используем, потому что они содержат ошибки. И мы хотим реализовать эти функции самостоятельно.

Одним из способов решить данную проблему является изменение структуры наших скриптов:
\`\`\`html
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
    function createGraph() {
        // код
    }

    function drawGraph() {
        // код
    }
</script>
\`\`\`
Таким образом, мы переопределяем методы, предоставляемые библиотекой.

Вторым способом является изменение имен наших функций:
\`\`\`html

<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
    function myCreateGraph() {
        // код
    }

    function myDrawGraph() {
        // код
    }
</script>
\`\`\`
Третий способ — использование IIFE:
\`\`\`html

<script>
    const graphUtility = (function() {
        function createGraph() {
            // код
        }

        function drawGraph() {
            // код
        }
        return {
            createGraph,
            drawGraph
        }
    })
</script>
\`\`\`
В этом примере мы создаем служебную переменную, которая содержит результат IIFE, возвращающий объект, содержащий методы createGraph и drawGraph.

Вот еще одна проблема, которую можно решить с помощью IIFE:
\`\`\`javascript

var li = document.querySelectorAll('.list-group > li')
for (var i - 0, len = li.length; i < len; i++) {
    li[i].addEventListener('click', function(e) {
        console.log(i)
    })
}
\`\`\`
Допустим, у нас есть элемент «ul» с классом «list-group», содержащий 5 дочерних элементов «li». И мы хотим выводить в консоль значение «i» при клике по отдельному «li». Однако вместо этого в консоль всегда выводится 5. Виной всему замыкание.

Одним из решений является IIFE:
\`\`\`javascript
var li = document.querySelectorAll('.list-group > li')
for (var i = 0, len = li.length; i < len; i++) {
    (function(currentIndex) {
        li[currentIndex].addEventListener('click', function(e) {
            console.log(currentIndex)
        })
    })(i)
}
\`\`\`
Причина, по которой этот код работает, как задумано, состоит в том, что IIFE создает новую область видимости на каждой итерации, и мы записываем значение «i» в currentIndex.`,`## 27. Для чего используется метод Function.prototype.apply?

Apply используется для привязки определенного объекта к значению this вызываемой функции.

\`\`\`javascript
const details = {
    message: 'Hello World!'
}

function getMessage() {
    return this.message
}

getMessage.apply(details) // Hello World!
\`\`\`

Этот метод похож на Function.prototype.call. Единственное отличие состоит в том, что в apply аргументы передаются в виде массива.

\`\`\`javascript
const person = {
    name: 'Marko Polo'
}

function greeting(greetingMessage) {
    return \`\${greetingMessage} \${this.name}\`
}

greeting.apply(person, ['Hello']) // Hello Marko Polo
\`\`\``,`## 28. Для чего используется метод Function.prototype.call?

Call используется для привязки определенного объекта к значению this вызываемой функции.
\`\`\`javascript
const details = {
    message: 'Hello World!'
};

function getMessage() {
    return this.message;
}

getMessage.call(details); // Hello World!
\`\`\`
Этот метод похож на Function.prototype.apply. Отличие состоит в том, что в call аргументы передаются через запятую.
\`\`\`javascript
const person = {
    name: 'Marko Polo'
};

function greeting(greetingMessage) {
    return \`\${greetingMessage} \${this.name}\`;
}

greeting.call(person, 'Hello'); // Hello Marko Polo
\`\`\``,`## 29. В чем разница между методами call и apply?

Отличие между call и apply состоит в том, как мы передаем аргументы в вызываемой функции. В apply аргументы передаются в виде массива, в call — через запятую.

\`\`\`javascript
const obj1 = {
    result: 0
}

const obj2 = {
    result: 0
}

function reduceAdd() {
    let result = 0
    for (let i = 0, len = arguments.length; i < len; i++) {
        result += arguments[i]
    }
    this.result = result
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5) // 15
\`\`\``,`## 30. Для чего используется метод Function.prototype.bind?
Bind возвращает новую функцию, значением this которой является объект, указанный в качестве первого параметра. В отличие от bind, call и apply сразу же вызывают функцию.

\`\`\`javascript
import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        // привязываем метод handleChange к компоненту MyComponent
    }

    handleChange(e) {
        // код
    }

    render() {
        return ( < >
            <
            input type = {
                this.props.type
            }
            value = {
                this.state.value
            }
            onChange = {
                this.handleChange
            }
            /> </ >
        )
    }
}
\`\`\``,`## 31. Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?


Функциональное программирование — это декларативная концепция программирования или образец (паттерн) того, как строятся приложения, как используются функции, содержащие выражения, которые вычисляют значения без изменения аргументов, которые им передаются.

Объект Array содержит методы map, filter и reduce, которые являются самыми известными функциями в мире функционального программирования из-за их полезности, а также потому, что они не изменяют массив, что делает эти функции «чистыми». Также в JS имеются замыкание и функции высшего порядка, которые являются характеристиками функционального языка программирования.

Метод map возвращает новый массив с результатами вызова callback для каждого элемента массива:

\`\`\`javascript
const words = ['Functional', 'Procedural', 'Object-Oriented']

const wordsLength = words.map(word => word.length)
\`\`\`

Метод filter создает новый массив со всеми элементами, которые удовлетворяют условию, указанному в callback:

\`\`\`javascript

const data = {
    {
        name: 'Mark',
        isRegistered: true
    } {
        name: 'Mary',
        isRegistered: false
    } {
        name: 'Mae',
        isRegistered: true
    }
}

const registeredUsers = data.filter(user => user.isRegistered)

\`\`\`


Метод reduce выполняет callback один раз для каждого элемента массива, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего callback), значение текущего элемента, текущий индекс и итерируемый массив:

\`\`\`javascript
const strs = ['I', ' ', 'am', ' ', 'Iron', ' ', 'Man']

const result = strs.reduce((acc, currentStr) => acc + str, '')
\`\`\``,`## 32. Что такое функции высшего порядка (Higher Order Functions)?


Функция высшего порядка — это функция, возвращающая другую функцию или принимающая другую функцию в качестве аргумента.

\`\`\`javascript
function higherOrderFunction(param, callback) {
    return callback(param)
}
\`\`\``,`## 33. Почему функции в JS называют объектами первого класса (First-class Objects)?


Функции называют объектами первого класса, потому что они обрабатываются также, как и любое другое значение в JS. Они могут присваиваться переменным, быть свойством объекта (методом), элементом массива, аргументом другой функции, значением, возвращаемым функцией. Единственным отличием функции от любого другого значения в JS является то, что функция может быть выполнена или вызвана.`,`## 34. Как бы Вы реализовали метод Array.prototype.map?
\`\`\`javascript
function map(arr, mapCallback) {
    // проверяем переданные параметры
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return []
    } else {
        let result = []
        // мы создаем массив с результатами при каждом вызове функции
        // поскольку мы не хотим менять оригинальный массив
        for (let i = 0, len = arr.length; i < len; i++) {
            result.push(mapCallback(arr[i], i, arr))
            // помещаем результаты mapCallback в result
        }
        return result
    }
}
\`\`\`

Метод map создает новый массив с результатом вызова указанной функции для каждого элемента массива.`,`## 35. Как бы Вы реализовали метод Array.prototype.filter?

\`\`\`javascript
function filter(arr, filterCallback) {
    // проверяем передаваемые параметры
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        let result = []
        // ...
        for (let i = 0, len = arr.length; i < len; i++) {
            // определяем соответствие возвращаемого результата заданному условию
            if (filterCallback(arr[i], i, arr)) {
                // помещаем значение, прошедшее фильтр, в result
                result.push(arr[i])
            }
        }
        return result
    }
}

\`\`\`
Метод filter создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.`,`## 36. Как бы Вы реализовали метод Array.prototype.reduce?

\`\`\`javascript
function reduce(arr, reduceCallbak, initialValue) {
    // ..
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        // если в функцию не было передано значения initialValue, то
        let hasInitialValue = initialValue !== undefined
        let value = hasInitialValue ? initialValue : arr[0]
        // мы будем использовать первый элемент initialValue

        // затем мы перебираем массив, начиная с 1, если в функцию не передавалось значения initialValue, либо с 0, если значение было передано
        for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
            // затем на каждой итерации мы присваиваем результат вызова reduceCallback переменной
            value = reduceCallback(value, arr[i], i, arr)
        }
        return value
    }
}
\`\`\`

Метод reduce применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.`,`## 37. Что такое объект arguments?

Arguments — это коллекция аргументов, передаваемых функции. Это объект, подобный массиву, у него есть свойство length, мы можем получить доступ к определенному значению с помощью arguments[i], но у него отсутствуют методы forEach, reduce, filter и map. Он позволяет узнать количество параметров функции.


Преобразовать arguments в массив можно с помощью Array.prototype.slice:

\`\`\`javascript
Array.prototype.slice.call(arguments)

\`\`\`
Запомните: в стрелочных функциях объект arguments не работает.

\`\`\`javascript
function one() {
    return arguments
}
const two = function() {
    return arguments
}
const three = function three({
    return arguments
})
const four = () => arguments

four() // arguments is not defined
\`\`\`
Вызов функции four приводит к ошибке ReferenceError: arguments is not defined. Эту проблему можно решить с помощью оператора rest:

\`\`\`javascript
const four = (...args) => args
\`\`\`

Это автоматически поместит все параметры в массив.`,`## 38. Как создать объект, не имеющий прототипа?

Это можно сделать с помощью Object.create:

\`\`\`javascript
const o1 = {}
console.log(o1.toString) // [object Object]

const o2 = Object.create(null) // в качестве первого параметра методу Object-create передается объект-прототип
// нам не нужен объект-прототип, поэтому передаем null
console.log(o2.toString) // o2.toString is not a function
\`\`\``,`## 39. Почему в представленном коде переменная b становится глобальной при вызове функции?
\`\`\`javascript
function myFunc(){
    let a = b = 0
}
myFunc()
\`\`\`

Так происходит, потому что оператор присваивания ("=") имеет правостороннюю ассоциативность, т.е. присваивает значения справа налево. Поэтому код принимает следующий вид:
\`\`\`javascript

function myFunc(){
    let a = (b = 0)
}
myFunc()
\`\`\`

Сначала значение 0 присваивается переменной «b», которая не объявлена. Движок JS делает ее глобальной. Возвращаемое выражением b = 0 значение (0) затем присваивается локальной переменной «a».

Эту проблему можно решить сначала объявив локальные переменные, а затем присвоив им значения:
\`\`\`javascript

function myFunc(){
    let a, b
    a = b = 0
}
myFunc()
\`\`\``,`## 40. Что такое ECMAScript?

ECMAScript — это спецификация, стандарт скриптовых языков программирования, он является основой JS, поэтому любые изменения ECMAScript отражаются на JS.

Последний вариант спецификации ECMA-262 можно посмотреть [здесь](https://www.ecma-international.org/publications/standards/Ecma-262.htm).`,`## 41. Что нового привнес в JS стандарт ES6 или ECMAScript2015?

* Стрелочные функции (Arrow Functions).
* Классы (Classes).
* Шаблонные строки (Template Strings).
* Расширенные объектные литералы (Enhanced Object literals).
* Деструктуризация (Object Destructuring).
* Промисы (Promises).
* Генераторы (Generators).
* Модули (Modules).
* Symbol.
* Прокси (Proxies).
* Множества (Sets).
* Параметры по умолчанию.
* Операторы rest и spread.
* Блочная область видимости (ключевые слова «let» и «const»).`,`## 42. В чем разница между ключевыми словами «var», «let» и «const»?

Переменные, объявленные с помощью ключевого слова «var», являются глобальными. Это означает, что они доступны из любого места в коде:

\`\`\`javascript
function giveMeX(showX){
    if(showX){
        var x = 5
    }
    return x
}

console.log(giveMeX(false))
console.log(giveMeX(true))
\`\`\`
Результатом первого console.log будет undefined, второго — 5. Мы имеем доступ к переменной «x» из-за ее всплытия в глобальную область видимости. Код из примера выше интерпретируется следующим образом:
\`\`\`javascript

function giveMeX(showX){
    var x // имеет значение undefined
    if(showX){
        x = 5
    }
    return x
}
\`\`\`

Результатом первого console.log является undefined, поскольку объявленные переменные, которым не присвоено значения, имеют значение undefined по умолчанию.

Переменные, объявленные с помощью ключевых слов «let» и «const» имеют блочную область видимости. Это означает, что они доступны только внутри блока ({ }):
\`\`\`javascript

function giveMeX(showX){
    if(showX){
        let x = 5
    }
    return x
}

function giveMeY(showY){
    if(showY){
        let y = 5
    }
    return y
}
\`\`\`

Вызов этих функций с параметром false приведет к ошибке ReferenceError, потому что к переменным «x» и «y» нет доступа снаружи блока и их значения не возвращаются (не всплывают).

Разница между «let» и «const» состоит в том, что в первом случае мы может менять значение переменной, а во втором — нет (константа). При этом, мы можем менять значение свойства объекта, объявленного с помощью const, но не само свойство (переменную).`,`## 43. Что такое стрелочные функции (Arrow Functions)?

Стрелочная функция — это относительно новый способ создания функций в JS. Стрелочные функции создаются быстрее и имеют более читаемый синтаксис, чем функциональные выражения. В стрелочных функциях опускается слово «function»:

\`\`\`javascript
// ES5
var getCurrentDate = function(){
    return new Date()
}

// ES6
const getCurrentDate = () => new Date()
\`\`\`
В функциональном выражении мы используем ключевое слово «return» для возврата значения. В стрелочной функции мы этого не делаем, поскольку стрелочные функции неявно возвращают значения при условии, что мы возвращаем одно выражение или значение:
\`\`\`javascript

// ES5
function greet(name){
    return 'Hello ' + name + '!'
}

// ES6
const greet = (name) => \`Hello ${name}\`
const greet2 = name = > \`Hello ${name}\`
\`\`\`

Мы также можем передавать параметры стрелочным функциям. Если мы передаем один параметр, его можно не оборачивать в круглые скобки:
\`\`\`javascript

const getArgs = () => arguments

const getArgs2 = (...rest) => rest
\`\`\`

У стрелочных функций нет доступа к объекту arguments. Поэтому вызов первой функции приведет к ошибке. Для получения параметров, переданных функции, мы можем использовать оператор rest.
\`\`\`javascript

const data = {
    result: 0
    nums: [1,2,3,4,5]
    computeResult(){
        // this ссылается на объект data
        const addAll = () => {
        // стрелочные функции копируют значение this из лексического окружения
        return this.nums.reduce((total, cur) => total + cur, 0)
        }
    this.result = addAll()
    }
}
\`\`\``,`## 44. Что такое классы (Classes)?

Классы — это относительно новый способ написания функций-конструкторов в JS. Это синтаксический сахар для функций-конструкторов. В основе классов лежат те же прототипы и прототипное наследование:

\`\`\`javascript
// ES5
function Person(firstName, lastName, age, address){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
}

Person.self = function(){
    return this
}

Person.prototype.toString = function(){
    return '[object Person]'
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

// ES6
class Person{
    constructor(firstName, lastName, age, address){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
    }

    static self(){
        return this
    }

    toString(){
        return '[object Person]'
    }

    getFullName(){
        return \`\${this.firstName} \${this.lastName}\`
    }
}
\`\`\`
Переопределение методов и наследование от другого класса:
\`\`\`javascript

// ES5
Employee.prototype = Object.create(Person.prototype)

function Employee(firstName, lastName, age, address, jobTitle, yearStarted){
    Person.call(this, firstName, lastName, age, address)
    this.jobTitle = jobTitle
    this.yearStarted = yearStarted
}

Employee.prototype.describe = function(){
    return \`I am \${this.getFullName()} and I have a position of #{this.jobTitle} and I started at \${this.yearStarted}}\`
}

Employee.prototype.toString = function(){
    return '[object Employee]'
}

// ES6
class Employee extends Person{ // наследуемся от Person
    constructor(firstName, lastName, age, address, jobTitle, yearStarted){
        super(firstName, lastName, age, address)
        this.jobTitle = jobTitle
        this.yearStarted = yearStarted
    }

    describe(){
       return \`I am \${this.getFullName()} and I have a position of #{this.jobTitle} and I started at \${this.yearStarted}}\`
    }

    toString(){ // переопределяем метод toString класса Person
        return '[object Employee]'
    }
}
\`\`\`
Как узнать об использовании прототипов?
\`\`\`javascript

class Something{ }

function AnotherSomething(){ }

const as = new AnotherSomething()
const s = new Something()

console.log(typeof Something) // function
console.log(typeof AnotherSomething) // function
console.log(as.toString()) // [object Object]
console.log(a.toString()) // [object Object]
console.log(as.toString === Object.prototype.toString)
console.log(a.toString === Object.prototype.toString)
// в обоих случаях получаем true
// Object.prototype находится на вершине цепочки прототипов
// Something и AnotherSomething наследуют от Object.prototype
\`\`\``,`## 45. Что такое шаблонные литералы (Template Literals)?

Шаблонные литералы — относительно новый способ создания строк в JS. Шаблонные литералы создаются с помощью двойных обратных кавычек (\`\`):
\`\`\`javascript
// ES5
var greet = 'Hi I\'m Mark'

// ES6
let greet = \`Hi I'm Mark\`
\`\`\`
В шаблонных литералах нам не нужно экранировать одинарные кавычки.
\`\`\`javascript
// ES5
var lastWords = '\n'
    + ' I \n'
    + ' am \n'
    + 'Iron Man \n'

// ES6
let lastWords = \`
    I
    am
    Iron Man
\`
\`\`\`

В ES6 нам не нужно использовать управляющую последовательность "\n" для перевода строки.
\`\`\`javascript
// ES5
function greet(name){
    return 'Hello ' + name + '!'
}

// ES6
function greet(name){
    return \`Hello \${name}!\`
}
\`\`\`

В ES6 нам не нужно использовать конкатенацию строк для объединения текста с переменной: мы можем использовать выражение \${expr} для получения значения переменной.`,`## 46. Что такое деструктуризация объекта (Object Destructuring)?


Деструктуризация — относительно новый способ получения (извлечения) значений объекта или массива.

Допустим, у нас есть такой объект:
\`\`\`javascript
const employee = {
    firstName: 'Marko',
    lastName: 'Polo',
    position: 'Software Developer',
    yearHired: 2017
}
\`\`\`
Раньше для получения свойств объекта мы создавали переменные для каждого свойства. Это было очень скучно и сильно раздражало:
\`\`\`javascript
var firstName = employee.firstName
var lastName = employee.lastName
var position = employee.position
var yearHired = employee.yearHired
\`\`\`
Использование деструктуризации позволяет сделать код чище и отнимает меньше времени. Синтаксис деструктуризации следующий: заключаем свойства объекта, которые хотим получить, в фигурные скобки ({ }), а если речь идет о массиве — в квадратные скобки ([ ]):
\`\`\`javascript
let { firstName, lastName, position, yearHired } = employee
\`\`\`

Для изменения имени переменной следует использовать «propertyName: newName»:
\`\`\`javascript

let { firstName: fName, lastName: lName, position, yearHired } = employee
\`\`\`

Для присвоения переменным значения по умолчанию следует использовать «propertyName = 'defaultValue'»:
\`\`\`javascript

let { firstName = 'Mark', lastName: lName, position, yearHired } = employee

\`\`\``,`## 47. Что такое модули (Modules)?

Модули позволяют объединять (использовать) код из разных файлов и избавляют нас от необходимости держать весь код в одном большом файле. До появления модулей в JS существовало две популярные системы модулей для поддержки кода:

* CommonJS — Nodejs
* AMD (AsyncronousModuleDefinition) — Browsers

Синтаксис модулей очень простой: мы используем import для импорта функциональности или значений из другого файла или файлов и export для экспорта.

Экспорт функциональности в другой файл (именной экспорт):
\`\`\`javascript
// ES5 CommonJS - helpers.js
exports.isNull = function(val){
    return val === null
}

exports.isUndefined = function(val){
    return val === undefined
}

exports.isNullOrUndefined = function(val){
    return exports.isNull(val) || exports.isUndefined(val)
}

// ES6 модули
export function isNull(val){
    return val === null;
}

export function isUndefined(val) {
    return val === undefined;
}

export function isNullOrUndefined(val) {
    return isNull(val) || isUndefined(val);
}
\`\`\`
Импорт функциональности в другой файл:
\`\`\`javascript
// ES5 CommonJS - index.js
const helpers = require('./helpers.js')
const isNull = helpers.isNull
const isUndefined = helpers.isUndefined
const isNullOrUndefined = helpers.isNullOrUndefined

// либо с помощью деструктуризации
const { isNull, isUndefined, isNullOrUndefined } = require('./helpers.js')

// ES6 модули
import * as helpers from './helpers.js' // helpers - это объект

// либо
import { isNull, isUndefined, isNullOrUndefined as isValid} from './helpers.js' // используем "as" для переименовывания
\`\`\`
Экспорт по умолчанию:
\`\`\`javascript
// ES5 CommonJS - index.js
class Helpers {
    static isNull(val){
        return val === null
    }

    static isUndefined(val){
        return val === undefined
    }

    static isNullOrUndefined(val){
        return this.isNull(val) || this.isUndefined(val)
    }
}

module.exports = Helpers

// ES6 модули
class Helpers {
    static isNull(val){
        return val === null
    }

    static isUndefined(val){
        return val === undefined
    }

    static isNullOrUndefined(val){
        return this.isNull(val) || this.isUndefined(val)
    }
}

export default Helpers
\`\`\`
Импорт:
\`\`\`javascript
// ES5 CommonJS - index.js
const Helpers = require('./helpers.js')
console.log(Helpers.isNull(null))

// ES6 модули
import Helpers from './helpers.js'
console.log(Helpers.isNull(null))
\`\`\`
Это базовое использование модулей. Я не стал вдаваться в подробности, поскольку мой пост и без того получается слишком большим.`,`## 48. Что такое объект Set?


Объект Set позволяет хранить уникальные значения, примитивы и ссылки на объекты. Еще раз: в Set можно добавлять только уникальные значения. Он проверяет хранящиеся в нем значения с помощью алгоритма SameZeroValue.

Экземпляр Set создается с помощью конструктора Set. Мы также можем передать ему некоторые значения при создании:
\`\`\`javascript
const set1 = new Set()
const set2 = new Set(['a','b','c','d','d','e']) // вторая "d" не добавится
\`\`\`
Мы можем добавлять значения в Set, используя метод add. Поскольку метод add является возвращаемым, мы может использовать цепочку вызовов:
\`\`\`javascript
set2.add('f')
set2.add('g').add('h').add('i').add('j').add('k').add('k') // вторая "k" не добавится
\`\`\`
Мы можем удалять значения из Set, используя метод delete:
\`\`\`javascript
set2.delete('k') // true
set2.delete('z') // false, потому что в set2 нет такого значения
\`\`\`
Мы можем проверить наличие свойства в Set, используя метод has:
\`\`\`javascript
set2.has('a') // true
set2.has('z') // false
\`\`\`
Для получения длины Set используется метод size:
\`\`\`javascript
set2.size // 10
\`\`\`
Метод clear очищает Set:
\`\`\`javascript
set2.clear() // пусто
\`\`\`
Мы можем использовать Set для удаления повторяющихся значений в массиве:
\`\`\`javascript
const nums = [1,2,3,4,5,6,6,7,8,8,5]
const uniqNums = [...new Set(nums)] // [1,2,3,4,5,6,7,8]
\`\`\``,`## 49. Что такое функция обратного вызова (Callback Function)?
Функция обратного вызова — это функция, вызов которой отложен на будущее (происходит при некоторых условиях, например, при наступлении события).
\`\`\`javascript
const btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click', function clickCallback(e)){
    // делаем нечто полезное
}
\`\`\`
В примере мы ждем события «клик» на элементе с идентификатором «btnAdd». По клику вызывается функция clickCallback. Функция обратного вызова добавляет некоторый функционал данным или событию. Методам reduce, filter и map в качестве второго аргумента передается функция обратного вызова. Хорошей аналогией callback является следующая ситуация: Вы звоните кому-то, он не отвечает, Вы оставляете ему сообщение и ждете, когда он перезвонит. Звонок или сообщение — это событие или данные, а callback — это ожидание (предвосхищение) встречного звонка.`,`## 50. Что такое промисы (Promises)?


Промисы — это один из приемов работы с асинхронным кодом в JS. Они возвращают результат асинхронной операции. Промисы были придуманы для решения проблемы так называемого «ада функций обратного вызова».
\`\`\`javascript
fs.readFile('somefile.txt', function(e, data){
    if(e){
        console.log(e)
    }
    console.log(data)
})
\`\`\`
Проблемы при таком подходе начинаются, когда нам необходимо добавить еще одну асинхронную операцию в первую (внутрь первой), затем еще одну и т.д. В результате мы получаем беспорядочный и нечитаемый код:
\`\`\`javascript

fs.readFile('somefile.txt', function(e,data){
    // код
    fs.readFile('directory', function(e, files){
        // код
        fs.mkdir('directory', function(e){
            // код
        })
    })
})
\`\`\`
А вот как это выглядит с промисами:
\`\`\`javascript

promReadFile('file/path')
.then(data => {
    return promReaddir('directory')
})
.then(data => {
    return promMkdir('directory')
})
.catch(e => {
    console.error(e)
})
\`\`\`

У промиса есть четыре состояния:

* Ожидание — начальное состояние промиса. Результата промиса неизвестен, поскольку операция не завершена.
* Выполнено — асинхронная операция выполнена, имеется результат.
* Отклонено — асинхронная операция не выполнена, имеется причина.
* Завершено — выполнено или отклонено.

В качестве параметров конструктор промиса принимает resolve и reject. В resolve записывается результат выполнения операции, в reject — причина невыполнения операции. Результат может быть обработан в методе .then, ошибка — в методе .catch. Метод .then также возвращает промис, поэтому мы можем использовать цепочку, состоящую из нескольких .then.
\`\`\`javascript

const myPromiseAsync = (...args) => {
    return new Promise((resolve, reject) => {
        doSomeAsync(...args, (error, data) => {
            if(error){
                reject(error)
            } else{
                resolve(data)
            }
        })
    })
}

myPromiseAsync()
.then(result => {
    console.log(result)
})
.catch(reason => {
    console.error(reason)
})
\`\`\`

Мы можем создать вспомогательную функцию для преобразования асинхронной операции с callback в промис. Она будет работать наподобие util из Node.js («промисификация»):
\`\`\`javascript

const toPromise = (asyncFuncWithCallback) => {
    return (...args) => {
        return new Promise((res, rej) => {
            asyncFuncWithCallback(...args, (e, result) => {
                return e ? rej(e) : res(result)
            })
        })
    }
}

const promiseReadFile = toPromise(fs.readFile)

promiseReadFile('file/path')
.then((data) => {
    console.log(data)
})
.catch(e => console.error(e))
\`\`\`

Подробнее о промисах можно почитать [здесь](https://learn.javascript.ru/promise-basics) и [здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise).`,`## 51. Что такое async/await?

Async/await — относительно новый способ написания асинхронного (неблокирующего) кода в JS. Им оборачивают промис. Он делает код более читаемым и чистым, чем промисы и функции обратного вызова. Однако для использования async/await необходимо хорошо знать промисы.

\`\`\`javascript
// промис
function callApi(){
    return fetch('url/to/api/endpoint')
    .then(resp => resp.json())
    .then(data => {
        // работаем с данными
    }).catch(err => {
        // работаем с ошибкой
    })
}

// async/await
// для перехвата ошибок используется try/catch
async function callApi(){
    try{
        const resp = await fetch('url/to/api/endpoint')
        const data = await res.json()
        // работаем с данными
    } catch(e){
        // работаем с ошибкой
    }
}
\`\`\`
Запомните: использование ключевого слова «async» перед функцией заставляет ее возвращать промис:
\`\`\`javascript
const giveMeOne = async () = 1

giveMeOne()
.then((num) => {
    console.log(num) // 1
})
\`\`\`
Ключевое слово «await» можно использовать только внутри асинхронной функции. Использование «await» внутри другой функции приведет к ошибке. Await ожидает завершения выражения справа, чтобы вернуть его значение перед выполнением следующей строчки кода.
\`\`\`javascript
const giveMeOne = async() => 1

function getOne(){
    try{
        const num = await giveMeOne()
        console.log(num)
    } catch(e){
        console.log(e)
    }
}
// Uncaught SyntaxError: await is only valid in an async function

async function getTwo(){
    try{
        const num1 = await giveMeOne()
        const nm2 = await giveMeOne()
        return num1 + num2
    } catch(e){
        console.log(e)
    }
}

await getTwo() // 2
\`\`\`
Подробнее об async/await можно почитать [здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function) и [здесь](https://learn.javascript.ru/async-await).`,`## 52. В чем разница между spread-оператором и rest-оператором?

Операторы spread и rest имеют одинаковый синтаксис ("..."). Разница состоит в том, что с помощью spread мы передаем или распространяем данные массива на другие данные, а с помощью rest — получаем все параметры функции и помещаем их в массив (или извлекаем часть параметров).
\`\`\`javascript
function add(a, b){
    return a + b
}

const nums = [5, 6]
const sum = add(...nums)
console.log(sum) // 11
\`\`\`
В этом примере мы используем spread при вызове функции add с данными массива nums. Значением переменной «a» будет 5, b = 6, sum = 11.
\`\`\`javascript
function add(...rest){
    return rest.reduce((total, current) => total + current)
}

console.log(add(1, 2)) // 3
console.log(add(1, 2, 3, 4, 5)) // 15
\`\`\`
Здесь мы вызываем функцию add с любым количеством аргументов. Add возвращает сумму этих аргументов.
\`\`\`javascript
const [first, ...others] = [1, 2, 3, 4, 5]
console.log(first) // 1
console.log(others) // [2, 3, 4, 5]
\`\`\`
В этом примере мы используем rest для помещения любого количества параметров, кроме первого, в массив others.`,`## 53. Что такое параметры по умолчанию (Default Parameters)?

Это относительно новый способ определения значений переменных по умолчанию.
\`\`\`javascript
// ES5
function add(a,b){
    a = a || 0
    b = b || 0
    return a + b
}

// ES6
function add(a = 0, b = 0){
    return a + b
}
// если мы не присвоим переменным "a" и "b" какие-нибудь значения, они будут равняться 0
add(1) // 1
\`\`\`
Можно использовать деструктуризацию:
\`\`\`javascript
function getFirst([first, ...rest] = [0, 1]){
    return first
}

getFirst() // 0
getFirst([10,20,30]) // 10

function getArr({ nums } = { nums: [1,2,3,4] }){
    return nums
}

getArr // [1,2,3,4]
getArr({nums:[5,4,3,2,1]}) // [5,4,3,2,1]
\`\`\`
Мы даже можем использовать по умолчанию параметры, объявленные в том же месте:
\`\`\`javascript
function doSomethingWithValue(value = 'Hello World', callback = () => { console.log(value) }){
    callback()
}
doSomethingWithValue() // Hello World
\`\`\``,`## 54. Что такое объектная обертка (Wrapper Objects)?

Примитивы строка, число и boolean имеют свойства и методы, несмотря на то, что они не являются объектами:

\`\`\`javascript
let name = 'marko'

console.log(typeof name) // string
console.log(name.toUpperCase()) // MARKO
\`\`\`
Name — это строка (примитивный тип), у которого нет свойств и методов, но когда мы вызываем метод toUpperCase(), это приводит не к ошибке, а к «MARKO».

Причина такого поведения заключается в том, что name временно преобразуется в объект. У каждого примитива, кроме null и undefined, есть объект-обертка. Такими объектами являются String, Number, Boolean, Symbol и BigInt. В нашем случае код принимает следующий вид:
\`\`\`javascript
console.log(new String(name).toUpperCase()) // MARKO
\`\`\`
Временный объект отбрасывается по завершении работы со свойством или методом.`,`## 55. В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?

Неявное преобразование — это способ приведения значения к другому типу без нашего ведома (участия).

Предположим, у нас есть следующее:
\`\`\`javascript
console.log(1 + '6')
console.log(false + true)
console.log(6 * '2')
\`\`\`
Результатом первого console.log будет 16. В других языках это привело бы к ошибке, но в JS 1 конвертируется в строку и конкатенируется (присоединяется) c 6. Мы ничего не делали, преобразование произошло автоматически.

Результатом второго console.log будет 1. False было преобразовано в 0, true — в 1. 0 + 1 = 1.

Результатом третьего console.log будет 12. Строка 2 была преобразована в число перед умножением на 6.

Явное преобразование предполагает наше участие в приведении значения к другому типу:
\`\`\`javascript
console.log(1 + parseInt('6'))
\`\`\`
В этом примере мы используем parseInt для приведения строки 6 к числу, затем складываем два числа и получаем 7.`,`## 56. Что такое NaN? Как проверить, является ли значение NaN?


NaN или Not A Number (не число) — это значение, получаемое в результате выполнения числовой операции над нечисловым значением:
\`\`\`javascript
let a

console.log(parseInt('abc'))
console.log(parseInt(null))
console.log(parseInt(undefined))
console.log(parseInt(++a))
console.log(parseInt({} * 10))
console.log(parseInt('abc' - 2))
console.log(parseInt(0 / 0))
console.log(parseInt('10a' * 10))
\`\`\`
В JS есть встроенный метод isNaN, позволяющий проверять, является ли значение NaN, но он ведет себя довольно странно:
\`\`\`javascript
console.log(isNaN()) // true
console.log(isNaN(undefined)) // true
console.log(isNaN({})) // true
console.log(isNaN(String('a'))) // true
console.log(isNaN(() => { })) // true
\`\`\`
Результатом всех console.log является true, несмотря на то, что ни одно из значений не является NaN.

ES6 для проверки, является ли значение NaN, рекомендует использовать метод Number.isNaN. Мы также можем написать вспомогательную функцию для решения проблемы «неравенства NaN самому себе»:
\`\`\`javascript
function checkIsNan(value){
    return value !== value
}
\`\`\``,`## 57. Как проверить, является ли значение массивом?


Для этого следует использовать метод Array.isArray:
\`\`\`javascript
console.log(Array.isArray(5)) // false
console.log(Array.isArray('')) // false
console.log(Array.isArray()) // false
console.log(Array.isArray(null)) // false
console.log(Array.isArray( {length: 5 })) // false
console.log(Array.isArray([])) // true
\`\`\`
Если среда, в которой Вы работаете, не поддерживает данный метод, можете использовать такой полифил:
\`\`\`javascript
function isArray(value){
    return Object.prototype.toString.call(value) === '[object Array]'
}
\`\`\``,`## 58. Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора "%")?


Для решения данной задачи можно использовать оператор "&" (бинарное и). Оператор "&" сравнивает операнды как бинарные значения.
\`\`\`javascript
function isEven(num){
    if(num & 1){
        return false
    } else{
        return true
    }
}
\`\`\`

0 в бинарной системе счисления это 000
1 — это 001
2 — 010
3 — 011
4 — 100
5 — 101
6 — 110
7 — 111
и т.д.


![alt text](8.png)

Console.log(5 & 1) вернет 1. Сначала оператор "&" конвертирует оба числа в бинарные значения, 5 превращается в 101, 1 — в 001. Затем производится побитовое сравнение:
![alt text](9.png)


Сравниваем 1 и 0, получаем 0.
Сравниваем 0 и 0, получаем 0.
Сравниваем 1 и 1, получаем 1.
Преобразуем бинарное значение в целое число, получаем 1.

Если эта информация кажется Вам слишком сложной, мы можем решить поставленную задачу с помощью рекурсивной функции:
\`\`\`javascript
function isEven(num){
    if(num < 0 || num === 1) return false
    if(num == 0) return true
    return isEven(num - 2)
}
\`\`\``,`## 59. Как определить наличие свойства в объекте?

Существует три способа это сделать.

Первый способ состоит в использовании оператора «in»:
\`\`\`javascript
const o = {
    'prop': 'bwahahah',
    'prop2': 'hweasa'
}

console.log('prop' in o) // true
console.log('prop1' in o) // false
\`\`\`
Второй — использовать метод hasOwnProperty:
\`\`\`javascript
console.log(o.hasOwnProperty('prop2')) // true
console.log(o.hasOwnProperty('prop1')) // false
\`\`\`
Третий — индексная нотация массива:
\`\`\`javascript
console.log(o['prop']) // bwahahah
console.log(o['prop1']) // undefined
\`\`\``,`## 60. Что такое AJAX?

AJAX или Asyncronous JavaScript and XML — это набор взаимосвязанных технологий, которые позволяют работать с данными в асинхронном режиме. Это означает, что мы можем отправлять данные на сервер и получать данные с него без перезагрузки веб-страницы.

AJAX использует следующие технологии:
HTML — структура веб-страницы.
CSS — стили веб-страницы.
JavaScript — поведение страницы и работа с DOM.
XMLHttpRequest API — отправка и получение данных с сервера.
PHP, Python, Nodejs — какой-нибудь серверный язык.`,`## 61. Как в JS создать объект?

Объектный литерал:
\`\`\`javascript
const o = {
    name: 'Mark',
    greeting(){
        return \`Hi, I'm \${this.name}\`
    }
}

o.greeting // Hi, I'm Mark
\`\`\`
Функция-конструктор:
\`\`\`javascript
function Person(name){
    this.name = name
}

Person.prototype.greeting = function(){
    return \`Hi, I'm \${this.name}\`
}

const mark = new Person('Mark')

mark.greeting() // Hi, I'm Mark
\`\`\`
Метод Object.create:
\`\`\`javascript
const n = {
    greeting(){
        return \`Hi, I'm \${this.name}\`
    }
}

const o = Object.create(n)

o.name = 'Mark'

console.log(o.greeting) // Hi, I'm Mark
\`\`\``,`## 62. В чем разница между методами Object.freeze и Object.seal?

Разница заключается в том, что при использовании метода Object.freeze мы не можем менять или редактировать свойства объекта, а при использовании Object.seal у нас такая возможность имеется.`,`## 63. В чем разница между оператором «in» и методом hasOwnProperty?

Отличие состоит в том, что оператор «in» проверяет наличие свойства не только в самом объекте, но и в его прототипах, а метод hasOwnProperty — только в объекте.
\`\`\`javascript
console.log('prop' in o) // true
console.log('toString' in o) // true

console.log(o.hasOwnProperty('prop')) // true
console.log(o.hasOwnProperty('toString')) // false
\`\`\``,`## 64. Какие приемы работы с асинхронным кодом в JS Вы знаете?

* Функции обратного вызова (Callbacks).
* Промисы (Promises).
* Async/await.
* Библиотеки вроде async.js, blueprint, q, co.`,`## 65. В чем разница между обычной функцией и функциональным выражением?

Допустим, у нас есть следующее:

\`\`\`javascript
hoistedFunc()
notHoistedFunc()

function hoistedFunc(){
    console.log('I am hoisted')
}

var notHoistedFunc = function(){
    console.log('I will not be hoisted!')
}

\`\`\`
Вызов notHoistedFunc приведет к ошибке, а вызов hoistedFunc нет, потому что hoistedFunc «всплывает», поднимается в глобальную область видимости, а notHoistedFunc нет.`,`## 66. Как в JS вызвать функцию?


В JS существует 4 способа вызвать функцию. Вызов определяет значение this или «владельца» функции.

Вызов в качестве функции. Если функция вызывается как метод, конструктор или с помощью методов apply или call, значит она вызывается как функция. Владельцем такой функции является объект window:
\`\`\`javascript
function add(a,b){
    console.log(this)
    return a + b
}

add(1,5) // window, 6

const o = {
    method(callback){
        callback()
    }
}

o.method(function(){
    console.log(this) // window
})
\`\`\`

Вызов в качестве метода. Когда функция является свойством объекта, мы называем ее методом. Когда вызывается метод, значением this становится объект этого метода:

\`\`\`javascript
const details = {
    name: 'Marko',
    getName(){
        return this.name
    }
}

details.getName() // Marko, значением this является объект details
\`\`\`
Вызов в качестве конструктора. Когда функция вызывается с использованием ключевого слова «new», мы называем такую функцию конструктором. При этом создается пустой объект, являющийся значением this:
\`\`\`javascript
function Employee(name, position, yearHired){
    // создается пустой объект, являющийся значением this
    // this = {}
    this.name = name
    this.position = position
    this.yearHired = yearHired
    // наследование от Employee.prototype неявно возвращает this, если не указано иное
}

const emp = new Employee('Marko Polo', 'Software Development', 2017)
\`\`\`
Вызов с помощью методов apply или call. Мы используем эти методы, когда хотим явно определить значение this или владельца функции:
\`\`\`javascript
const obj1 = {
    result: 0
}

const obj2 = {
    result: 0
}

function reduceAdd(){
    let result = 0
    for(let i = 0, len = arguments.length; i < len; i++){
        result += arguments[i]
    }
    this.result = result
}

reduceAdd.apply(obj1, [1,2,3,4,5]) // значением this является obj1
reduceAdd.call(obj2, 1,2,3,4,5) // значением this является obj2
\`\`\``,`## 67. Что такое запоминание или мемоизация (Memoization)?


Мемоизация — это прием создания функции, способной запоминать ранее вычисленные результаты или значения. Преимущество мемоизации заключается в том, что мы избегаем повторного выполнения функции с одинаковыми аргументами. Недостатком является то, что мы вынуждены выделять дополнительную память для сохранения результатов.`,`## 68. Как бы Вы реализовали вспомогательную функцию запоминания?

\`\`\`javascript
function memoize(fn){
    const cache = {}
    return function(param){
        if(cache[param]){
            console.log('cached')
            return cache[param]
        } else{
            let result = fn(param)
            cache[param] = result
            console.log('not cached')
            return result
        }
    }
}

const toUpper = (str = '') => str.toUpperCase()

const toUpperMemoized = memoize(toUpper)

toUpperMemoized('abcdef')
toUpperMemoized('abcdef') // не выполнится
\`\`\`

Мы реализовали функцию мемоизации с одним аргументом. Сделаем ее «мультиаргументной»:
\`\`\`javascript
const slice = Array.prototype.slice
function memoize(fn){
    const cache = {}
    return (...args) => {
        const params = slice.call(args)
        console.log(params)
        if(cache[params]){
            console.log('cached')
            return cache[params]
        } else{
            let result = fn(...args)
            cache[params] = result
            console.log('not cached')
            return result
        }
    }
}
const makeFullName = (fName, lName) => \`\${fName} \${lName}\`
const reduceAdd = (numbers, startValue = 0) => numbers.reduce((total, cur) => total + cur, startValue)

const memoizedFullName = memoize(makeFullName)
const memoizeReduceAdd = memoize(reduceAdd)

memoizedFullName('Marko', 'Polo')
memoizedFullName('Marko', 'Polo') // не выполнится

memoizeReduceAdd([1,2,3,4],5)
memoizeReduceAdd([1,2,3,4],5) // не выполнится
\`\`\``,`## 69. Почему typeof null возвращает object? Как проверить, является ли значение null?

typeof null == 'object' всегда будет возвращать true по историческим причинам. Поступало предложение исправить эту ошибку, изменив typeof null = 'object' на typeof null = 'null', но оно было отклонено в интересах сохранения обратной совместимости (такое изменение повлекло бы за собой большое количество ошибок).

Для проверки, является ли значение null можно использовать оператор строгого равенства (===):

\`\`\`javascript
function isNull(value){
    return value === null
}
\`\`\``,`## 70. Для чего используется ключевое слово «new»?

Ключевое слово «new» используется в функциях-конструкторах для создания нового объекта (нового экземпляра класса).

Допустим, у нас есть такой код:

\`\`\`javascript
function Employee(name, position, yearHired){
    this.name = name
    this.position = position
    this.yearHired = yearHired
}

const emp = new Employee('Marko Polo', 'Software Development', 2017)
\`\`\`
Ключевое слово «new» делает 4 вещи:

1. Создает пустой объект.
2. Привязывает к нему значение this.
3. Функция наследует от functionName.prototype.
4. Возвращает значение this, если не указано иное.`]


export function jsQuestionsData():Dictionary {

  let data:Dictionary =  {
    title: 'JsQuestions',
    version: 1,
    sections: [
      {
        title: 'Questions',
        groups: [
          {
            title: "Based on https://habr.com/ru/post/486820/",
            subjects: []
          },
        ]
      },
    ]
  }

  jsQuestoinsArray.forEach((e: string) => {
    data.sections[0].groups[0].subjects.push({
      subject: e.slice(0,e.indexOf('?')).substring(2) + '?',
      ru: e.substring(e.indexOf('?') + 1, e.length),
      en: ''
    })
  })

  return data;
}
