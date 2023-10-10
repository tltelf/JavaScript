'use strict';

console.log(15 / 2); // 7.5
console.log(15 % 2); // 1
console.log(14 % 2); // 0

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;
function isEvenFunc(n) {
  return n % 2 === 0;
}

console.log(isEven(17)); // false
console.log(isEven(12)); // true

console.log(isOdd(17)); // true
console.log(isOdd(12)); // false
