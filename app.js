'use strict';
/* Необходимо поменять местами ключи и значения в следующем Map */
const weatherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14],
]);
console.log(weatherMap); // Map(3) {'London' => 10, 'Moscow' => 7, 'Paris' => 14}

const reverseArrayWeatherMap = [...weatherMap].map((i) => i.reverse());
const reverseWeatherMap = new Map(reverseArrayWeatherMap);
console.log(reverseWeatherMap); // Map(3) {10 => 'London', 7 => 'Moscow', 14 => 'Paris'}

// Можно записать еще более коротко
const reverseWeatherMap2 = new Map([...weatherMap].map((i) => i.reverse()));
console.log(reverseWeatherMap2); // Map(3) {10 => 'London', 7 => 'Moscow', 14 => 'Paris'}
