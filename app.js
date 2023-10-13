'use strict';

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(date1); // Fri Nov 15 2024 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(Number(date1)); // 1731614400000
console.log(Number(date2)); // 1734206400000
console.log(date2 - date1); // 2592000000

function getDaysBetweenDates(date1, date2) {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2)); // 30
