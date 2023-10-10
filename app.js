'use strict';

// Math.round округляет до ближайшего целого числа
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.6)); // 2
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.4999)); // 1

// Math.ceil округляет до верхнего значения
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1)); // 1
console.log(Math.ceil(0.1)); // 1

// Math.floor округляет до нижнего значения
console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.9)); // 2

// Math.trunc обрезает до целого
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(2.1)); // 2
console.log(Math.trunc(1.11111)); // 1

// toFixed() округление до определенного числа знаков после запятой и возвращение строки
console.log((1.4999).toFixed(1)); // '1.5'
// Чтобы вернуть строку, можно преобразовать с помощью Number()
console.log(Number((1.4999).toFixed(1))); // 1.5
