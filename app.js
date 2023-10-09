'use strict';

const weatherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14],
]);

// Итерация по Map
for (const [key, value] of weatherMap) {
  console.log(key); // London       // Moscow       // Paris
  console.log(value); // 10           // 7            // 14
}

// Из Map в массив
console.log([...weatherMap]); // [['london', 10], ['moscow', 7], ['paris', 14]];

console.log(weatherMap.keys()); // MapIterator {'London', 'Moscow', 'Paris'}
console.log(weatherMap.values()); // MapIterator {10, 7, 14}

console.log([...weatherMap.keys()]); // ['London', 'Moscow', 'Paris']
console.log([...weatherMap.values()]); // [10, 7, 14]
