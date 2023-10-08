'use strict';

const weatherMap = new Map();
console.log(weatherMap); // Map(0) {size: 0}

// Элементы добавляются в Map с помощью метода set():
// weatherMap.set('London', '10');
// weatherMap.set('Moscow', '7');
// также мы можем использовать чеининг и добавлять элементы более коротко
weatherMap.set('London', '10').set('Moscow', '7');
console.log(weatherMap); // Map(2) {'London' => '10', 'Moscow' => '7'}

// Значения можно получить с помощью метода get():
console.log(weatherMap.get('Moscow')); // 7
console.log(weatherMap.get('somekey')); // undefined

// Метод has() позволяет проверить наличие ключа в Map:
console.log(weatherMap.has('Moscow')); // true
console.log(weatherMap.has('somekey')); // false

// Элементы можно удалять с помощью метода delete():
weatherMap.delete('London');
console.log(weatherMap); // Map(1) {'Moscow' => '7'}

// Полностью очистить Map можно с помощью метода clear():
weatherMap.clear();
console.log(weatherMap); // Map(0) {size: 0}

// Ключи в Map могут быть не только строками, а любым типом данных
weatherMap.set(1, 5).set(true, 'yes').set(false, 'no');
console.log(weatherMap); // Map(3) {1 => 5, true => 'yes', false => 'no'}

// При повторном применении set() с тем же ключом, у нас перезаписывается существующее значение
weatherMap.set(true, 'YES!').set(false, 'no?');
console.log(weatherMap); // Map(3) {1 => 5, true => 'YES!', false => 'no?'}

// В качестве ключа могут быть также массивы и объекты
weatherMap.set([1, 2, 3], 'array');
console.log(weatherMap); // Map(4) {1 => 5, true => 'YES!', false => 'no?', Array(3) => 'array'}

weatherMap.set({ a: 1 }, { b: 1 });
console.log(weatherMap); // Map(5) {1 => 5, true => 'YES!', false => 'no?', Array(3) => 'array', {…} => {…}}

// Размер Map можно получить с помощью свойства size:
console.log(weatherMap.size); // 5

// Чтобы мы не получили undefined при обращении к ключу массива или объекта
// нам нужно сначала создать объект или массив и указать его в качестве ключа в Map
console.log(weatherMap.get([1, 2, 3])); // undefined
console.log(weatherMap.get({ a: 1 })); // undefined

const weatherMap2 = new Map();
console.log(weatherMap2); // Map(0) {size: 0}

const arr = [1, 2, 3];
weatherMap2.set(arr, 'array').set({ a: 1 }, 'obj');
console.log(weatherMap2); // Map(2) {Array(3) => 'array', {…} => 'obj'}

console.log(weatherMap2.get(arr)); // array
console.log(weatherMap2.get({ a: 1 })); // undefined
