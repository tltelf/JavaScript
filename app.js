'use strict';

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 3);

const third = new Date(2024, 10, 10);
const fourth = new Date(2024, 10, 10);

console.log(first.getTime()); // 1730664000000
console.log(first.getTime() > second.getTime()); // true
console.log(first > second); // true
console.log(first < second); // false

console.log(third == fourth); // false потому что сравниваются ссылки на объекты, а не сами объекты
console.log(third === fourth); // false

console.log(third.getTime() == fourth.getTime()); // true
console.log(third.getTime() === fourth.getTime()); // true
console.log(Number(third) === Number(fourth)); // true
console.log(+third === +fourth); // true
