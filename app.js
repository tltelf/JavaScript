'use strict';

/*
	Написать функцию, которая принимает min и max
	и возвращает случайное целое число между ними, включая их
*/

// Правильное решение
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandom(1, 20));

// Пробное решение
// function getRandom(min, max) {
//   // let randomNum = (Number(Math.random().toFixed(2)) * 100).toFixed(0);
//   let randomNum = Number((Number(Math.random().toFixed(2)) * 100).toFixed(0));
//   if (randomNum > max) {
//     randomNum = max;
//     console.log(randomNum);
//   } else if (randomNum < max && randomNum > min) {
//     console.log(randomNum);
//   } else {
//     console.log(min);
//   }
// }

// getRandom(1, 50);
