function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// kek.onclick = el;

// var el = document.querySelector('.questions');
//
// el.innerHTML = '<p>' + encodedMessage + '</p>' + el.innerHTML;




//1
var questionOne = [
 '0',
 '1. Развитие языков программирования. Обзор языков программирования. Области применения языков программирования',
 '2. Компиляторы и интерпретаторы. Жизненный цикл программы.',
 '3. Программа. Программный продукт и его характеристики. Основные этапы решения задач на компьютере.',
 '4. Переменные и константы. Объявление объектов данных. Внутреннее представление данных в памяти компьютера.',
 '5. Типы данных. Простые типы данных.',
 '6. Производные типы данных. Структурированные типы данных.',
 '7. Операции и выражения. Правила формирования и вычисления выражений. Структура программы. Ввод и вывод данных.',
 '8. Оператор присваивания. Составной оператор. Условный оператор. Оператор выбора.',
 '9. Понятие условия. Виды условий. Комбинирование различных условий.',
 '10. Понятие цикла. Виды циклов. Цикл с постусловием. Цикл с предусловием. Цикл с параметром. Вложенные циклы.',
 '11. Понятие рекурсии. Пример рекурсии. Отличие рекурсии от вложенных циклов.',
 '12. Функции и методы в программировании. Понятие аргумента. Примеры функций с аргументами и без. Понятие чистой функции.',
 '13. Понятие потока выполнения программы. Понятие прерываний. Влияние прерываний на поток выполнения.',
 '14. Понятие инкремента и декремента. Примеры инкрементации и декрементации значений переменных в программировании.',
 '15. Ошибки в программировании. Виды ошибок. Способы отладки.',
 '16. Итеративный процесс. Понятие итерации. Примеры итераций.'
];

var encodedMessageOne = [ ];
encodedMessageOne[0] = getRandomInRange(1, 16);
console.log(encodedMessageOne);

var decodedMessageOne = '';

for(var i = 0; i <= encodedMessageOne.length - 1; i++){
  decodedMessageOne += questionOne[encodedMessageOne[i]];
  }
console.log(decodedMessageOne);



//2

var questionTwo = [
 '0',
 '1. Язык JavaScript, история его возникновения. Особенности языка.',
 '2. Что может и чего не может JavaScript в браузере. Какие существую варианты обхода этих ограничений.',
 '3. Понятие скрипт. Написание и исполнение скриптов на JavaScript. Способы интерпретации скриптов, написанных на JavaScript.',
 '4. Переменные и постоянные (константы) в JavaScript. Способы их задать.',
 '5. Ввод и вывод в JavaScript. Как можно вводить данные и куда выводить.',
 '6. Типы данных в JavaScript. Особенности типов данных в JavaScript в отличие от большинства других популярных языков программирования. Преобразование (приведение) типов.',
 '7. Условия в JavaScript, их виды и способы их задать. Вложенные условия, примеры на JavaScript.',
 '8. Циклы в JavaScript, их основные виды и назначение. Отличие вложенного цикла и рекурсии, примеры на JavaScript.',
 '9. Функции в JavaScript, виды функций. Назначение функций в JavaScript. Примеры функций на JavaScript.',
 '10. Способы отладки кода на JavaScript на примере браузера Google Chrome.',
];

var encodedMessageTwo = [ ];
encodedMessageTwo[0] = getRandomInRange(1, 10);
console.log(encodedMessageTwo);

var decodedMessageTwo = '';

for(var i = 0; i <= encodedMessageTwo.length - 1; i++){
  decodedMessageTwo += questionTwo[encodedMessageTwo[i]];
  }
console.log(decodedMessageTwo);


//3

var questionThree = [
 '0',
 '1. Понятие контроля версий. Существующие популярные системы контроля версий. Принципиальное отличие системы GIT от остальных.',
 '2. Понятие репозитория. Локальные и удаленные репозитории. Принципы работы с репозиториями.',
 '3. Понятие коммит. Для чего нужны коммиты. Что означает коммит в системе контроля версий. Как именуются коммиты.',
 '4. Ветки в GIT. Назначение веток. Понятие слияния веток.',
 '5. Конфликты слияния веток. Причины возникновения конфликтов. Пути решения конфликтов.',
 '6. Понятие Fork. Для чего используется Fork при работе с удаленными репозиториями.',
 '7. Понятия Pull и Push. Особенности этих методов при работе с удаленными репозиториями.',
 '8. Понятие Stash. Особенности принципа сбора изменений перед формированием коммита.',
 '9. Понятие HEAD. Переход между состояниями коммитов в рамках отдельной ветки репозитория. Для чего это нужно.',
 '10. Понятие Pull Requests. Принцип работы. Подход к работе с предложенными изменениями.',
];

var encodedMessageThree = [ ];
encodedMessageThree[0] = getRandomInRange(1, 10);
console.log(encodedMessageThree);

var decodedMessageThree = '';

for(var i = 0; i <= encodedMessageThree.length - 1; i++){
  decodedMessageThree += questionThree[encodedMessageThree[i]];
  }
console.log(decodedMessageThree);
