'use strict';

const weatherMap = new Map([
  ['London', '10'],
  ['Moscow', '7'],
]);
console.log(weatherMap); // Map(2) {'London' => '10', 'Moscow' => '7'}

const weatherObject = {
  london: 10,
  moscow: 7,
  paris: 14,
};

console.log(Object.entries(weatherObject)); // [['london', 10], ['moscow', 7], ['paris', 14]]
const weatherMap2 = new Map(Object.entries(weatherObject));
console.log(weatherMap2); // Map(3) {'london' => 10, 'moscow' => 7, 'paris' => 14}
console.log(weatherMap2.size); // 3
