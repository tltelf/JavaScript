'use strict';

console.log(Math.sqrt(36)); // 6
console.log(36 ** (1 / 2)); // 6
console.log(Math.cbrt(27)); // 3

console.log(16 ** (1 / 4)); // 2
console.log(Math.pow(16, 1 / 4)); // 2

console.log(Math.sign(-100)); // -1
console.log(Math.sign(35)); // 1

console.log(Math.abs(-100)); // 100
console.log(Math.abs(100)); // 100

console.log(Math.exp(3)); // 20.085536923187668

console.log(Math.max(1, -2, 10, 0, 19)); // 19
console.log(Math.max(1, -2, '10', true, '19')); // 19
console.log(Math.max(1, -2, '10', true, '19s')); // NaN

console.log(Math.min(1, -2, '10', true, '19')); // -2

const arr = [1, -2, 10, 0, 19];
console.log(Math.max(arr)); // NaN
// С помощью spread оператора наш массив преобразовался в аргументы функции max()
console.log(Math.max(...arr)); // 19

console.log(Math.random());
