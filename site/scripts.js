
var categories = [{
    index: 0,
    name: 'Вопросы общего цикла'
  },
  {
    index: 1,
    name: 'Вопросы по JavaScript'
  },
  {
    index: 2,
    name: 'Системы контроля версий (GIT)'
  }
];

var all_questions = [{
    index: 0,
    category: 0,
    name: '1.Развитие языков программирования. Обзор языков программирования. Области применения языков программирования.'
  },
  {
    index: 1,
    category: 0,
    name: '2.Компиляторы и интерпретаторы. Жизненный цикл программы.'
  },
  {
    index: 2,
    category: 0,
    name: '3.Программа. Программный продукт и его характеристики. Основные этапы решения задач на компьютере.'
  },
  {
    index: 3,
    category: 0,
    name: '4.Переменные и константы. Объявление объектов данных. Внутреннее представление данных в памяти компьютера.'
  },
  {
    index: 4,
    category: 0,
    name: '5.Типы данных. Простые типы данных.'
  },
  {
    index: 5,
    category: 0,
    name: '6.Производные типы данных. Структурированные типы данных.'
  },
  {
    index: 6,
    category: 0,
    name: '7.Операции и выражения. Правила формирования и вычисления выражений. Структура программы. Ввод и вывод данных.'
  },
  {
    index: 7,
    category: 0,
    name: '8.Оператор присваивания. Составной оператор. Условный оператор. Оператор выбора.'
  },
  {
    index: 8,
    category: 0,
    name: '9.Понятие условия. Виды условий. Комбинирование различных условий.'
  },
  {
    index: 9,
    category: 0,
    name: '10.Понятие цикла. Виды циклов. Цикл с постусловием. Цикл с предусловием. Цикл с параметром. Вложенные циклы.'
  },
  {
    index: 10,
    category: 0,
    name: '11.Понятие рекурсии. Пример рекурсии. Отличие рекурсии от вложенных циклов.'
  },
  {
    index: 11,
    category: 0,
    name: '12.Функции и методы в программировании. Понятие аргумента. Примеры функций с аргументами и без. Понятие чистой функции.'
  },
  {
    index: 12,
    category: 0,
    name: '13.Понятие потока выполнения программы. Понятие прерываний. Влияние прерываний на поток выполнения.'
  },
  {
    index: 13,
    category: 0,
    name: '14.Понятие инкремента и декремента. Примеры инкрементации и декрементации значений переменных в программировании.'
  },
  {
    index: 14,
    category: 0,
    name: '15.Ошибки в программировании. Виды ошибок. Способы отладки.'
  },
  {
    index: 15,
    category: 0,
    name: '16.Итеративный процесс. Понятие итерации. Примеры итераций.'
  },
  {
    index: 16,
    category: 1,
    name: '1.Язык JavaScript, история его возникновения. Особенности языка.'
  },
  {
    index: 17,
    category: 1,
    name: '2.Что может и чего не может JavaScript в браузере. Какие существую варианты обхода этих ограничений.'
  },
  {
    index: 18,
    category: 1,
    name: '3.Понятие скрипт. Написание и исполнение скриптов на JavaScript. Способы интерпретации скриптов, написанных на JavaScript.'
  },
  {
    index: 19,
    category: 1,
    name: '4.Переменные и постоянные (константы) в JavaScript. Способы их задать.'
  },
  {
    index: 20,
    category: 1,
    name: '5.Ввод и вывод в JavaScript. Как можно вводить данные и куда выводить.'
  },
  {
    index: 21,
    category: 1,
    name: '6.Типы данных в JavaScript. Особенности типов данных в JavaScript в отличие от большинства других популярных языков программирования. Преобразование (приведение) типов.'
  },
  {
    index: 22,
    category: 1,
    name: '7.Условия в JavaScript, их виды и способы их задать. Вложенные условия, примеры на JavaScript.'
  },
  {
    index: 23,
    category: 1,
    name: '8.Циклы в JavaScript, их основные виды и назначение. Отличие вложенного цикла и рекурсии, примеры на JavaScript.'
  },
  {
    index: 24,
    category: 1,
    name: '9.Функции в JavaScript, виды функций. Назначение функций в JavaScript. Примеры функций на JavaScript.'
  },
  {
    index: 25,
    category: 1,
    name: '10.Способы отладки кода на JavaScript на примере браузера Google Chrome.'
  },
  {
    index: 26,
    category: 2,
    name: '1.Понятие контроля версий. Существующие популярные системы контроля версий. Принципиальное отличие системы GIT от остальных.'
  },
  {
    index: 27,
    category: 2,
    name: '2.Понятие репозитория. Локальные и удаленные репозитории. Принципы работы с репозиториями.'
  },
  {
    index: 28,
    category: 2,
    name: '3.Понятие коммит. Для чего нужны коммиты. Что означает коммит в системе контроля версий. Как именуются коммиты.'
  },
  {
    index: 29,
    category: 2,
    name: '4.Ветки в GIT. Назначение веток. Понятие слияния веток.'
  },
  {
    index: 30,
    category: 2,
    name: '5.Конфликты слияния веток. Причины возникновения конфликтов. Пути решения конфликтов.'
  },
  {
    index: 31,
    category: 2,
    name: '6.Понятие Fork. Для чего используется Fork при работе с удаленными репозиториями.'
  },
  {
    index: 32,
    category: 2,
    name: '7.Понятия Pull и Push. Особенности этих методов при работе с удаленными репозиториями.'
  },
  {
    index: 33,
    category: 2,
    name: '8.Понятие Stash. Особенности принципа сбора изменений перед формированием коммита.'
  },
  {
    index: 34,
    category: 2,
    name: '9.Понятие HEAD. Переход между состояниями коммитов в рамках отдельной ветки репозитория. Для чего это нужно.'
  },
  {
    index: 35,
    category: 2,
    name: '10.Понятие Pull Requests. Принцип работы. Подход к работе с предложенными изменениями.'
  }
];


function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var questions = [questionOne = [], questionTwo = [], questionThree = []];
var deMessages = [decodedMessageOne = '', decodedMessageTwo = '', decodedMessageThree = ''];
var enMessages = [encodedMessageOne = [], encodedMessageTwo = [], encodedMessageThree = []];

//функция для пуша
function pushingFunction(categoryOfNumber, whereToPush) {
  for (var i = 0; i < all_questions.length; i++) {
    if (all_questions[i].category == categoryOfNumber) {
      whereToPush.push(all_questions[i]);
    }
  }
}
//рандомайзер
function randomNumber(whatPush,questionNumberTo) {
  whatPush.push(getRandomInRange(0, (questionNumberTo.length - 1)));
};

//генерация вопросов
function legitFunc(number) {
  pushingFunction(categories[number].index, questions[number]);

  randomNumber(enMessages[number], questions[number]);

  for(var i = 0; i <= enMessages[number].length - 1; i++){
    deMessages[number] += questions[number][enMessages[number][i]].name;
    }
}

//Вывод первого вопроса

legitFunc(0);

//Вывод второго вопроса

legitFunc(1);

//Вывод третьего вопроса

legitFunc(2);

//кнопки и все такое
document.getElementById('kek').hidden = true;
document.getElementById('kekus').hidden = true;
document.getElementById('nextStudent').hidden = true;

tts.onclick = soc;
kek.onclick = lasagna;
kekus.onclick = reload;
nextStudent.onclick = blabla;

var sosige = '';
function soc() {
 sosige = document.getElementById('studentName').value;
 document.getElementById('inputname').hidden = true;
 document.getElementById('kek').hidden = false;

};

function lasagna (){
    var el = document.getElementById('all_questions');
    el.innerHTML = '<p class="hotbob">' + sosige + '</p>' + '<p class="boldp">' + 'Первый вопрос:<br>' + '</p>' + '<p>' + deMessages[0] + '</p>' + '<p class="boldp">' + '<br>Второй вопрос:<br>' + '</p>' + '<p>' + deMessages[1] + '</p>' +'<p class="boldp">' + '<br>Третий вопрос:<br>'+ '</p>'+ '<p>'+ deMessages[2]  +  '</p>' ;
    document.getElementById('kek').hidden = true;
    document.getElementById('kekus').hidden = false;
  document.getElementById('nextStudent').hidden = false;

};

function reload () {
  document.getElementById('kekus').hidden = true;
  document.getElementById('nextStudent').hidden = true;
  window.print();
  document.getElementById('nextStudent').hidden = false;
  document.getElementById('kekus').hidden = false;

};
function blabla() {
  location.reload();
};
