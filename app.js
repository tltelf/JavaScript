'use strict';

console.log(10 === 10.0); // true
// Числа хранятся в бинарном формате "0 1"
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// Получаем число из строки
console.log(Number('10')); // 10
console.log(+'20'); // 20
console.log(Number.parseInt('10', 10)); // 10
console.log(Number.parseInt('10 sec', 10)); // 10
console.log(Number.parseInt('sec 10', 10)); // NaN

console.log(Number.parseInt('10.5', 10)); // 10
console.log(Number.parseInt('10.5 sec', 10)); // 10
console.log(Number.parseInt('sec 10.5', 10)); // NaN

// parseFloat
console.log(Number.parseFloat('10.5', 10)); // 10.5
console.log(Number.parseFloat('10.5 sec', 10)); // 10.5
console.log(Number.parseFloat('sec 10.5', 10)); // NaN

// Проверяем число или не число
// isNaN, если не число, выдает true
console.log(Number.isNaN(Number('10sdfs'))); // true
console.log(Number.isNaN(10 / 0)); // false
console.log(10 / 0); // Infinity

// isFinite, если не число, выдает false
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(Number('10sdfs'))); // false
console.log(Number.isFinite(10)); // true

// Если нужно отловить дробное число
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.4)); // false
