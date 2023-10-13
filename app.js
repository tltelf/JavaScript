'use strict';

const date = new Date();

console.log(date); // Fri Oct 13 2023 16:04:50 GMT+0400 (Самарское стандартное время)
console.log(new Intl.DateTimeFormat('ru-RU').format(date)); // 13.10.2023
const options1 = {
  hour: 'numeric',
  minute: 'numeric',
};
console.log(new Intl.DateTimeFormat('ru-RU', options1).format(date)); // 16:04

const options2 = {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  weekday: 'short',
  year: '2-digit',
};
console.log(new Intl.DateTimeFormat('en-US', options2).format(date)); // October 23 Fri at 4:04 PM
console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date)); // октябрь 23 г. пт в 16:04

console.log(navigator.language); // ru-RU
console.log(new Intl.DateTimeFormat(navigator.language, options1).format(date)); // 16:04
