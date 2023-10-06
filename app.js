'use strict';

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet); // Set {1, 2, 3}

mySet.add(2); // Дубликат будет проигнорирован

console.log(mySet); // Set {1, 2, 3}

mySet.delete(3);

console.log(mySet); // Set {1, 2}

console.log(mySet.has(1)); // true
console.log(mySet.has(4)); // false

mySet.forEach((value) => {
  console.log(value);
});

const flights = ['Russia', 'USA', 'London', 'London', 'USA', 1, false];
// Внутрь сета передается любой итерируемый объект - это любой объект по которому
// можно проходиться поэлементно. Это может быть массив, это может быть строка
const setFlights = new Set(flights);
console.log(setFlights); // Set(5) {'Russia', 'USA', 'London', 1, false}

// size: Возвращает количество элементов в Set.
console.log(setFlights.size); // 5

// has(value): Проверяет, существует ли элемент в Set.
console.log(setFlights.has('Russia')); // true
console.log(setFlights.has('s')); // false

// add(value): Добавляет элемент в Set, если его еще нет
// принимает булево значение, число или строку
setFlights.add('Paris');
setFlights.add('Paris'); // Дубликат будет проигнорирован
console.log(setFlights); // Set(6) {'Russia', 'USA', 'London', 1, false, 'Paris'}

// delete(value): Удаляет элемент из Set.
setFlights.delete('London');
console.log(setFlights); // Set(5) {'Russia', 'USA', 1, false, 'Paris'}

// перебор элементов
for (const flight of setFlights) {
  console.log(flight); // Russia   // USA   // 1   // false   // Paris
}
// или
setFlights.forEach((value) => {
  console.log(value); // Russia   // USA   // 1   // false   // Paris
});

// Из сета в массив с помощью spread синтаксиса
console.log([...setFlights]); // (5) ['Russia', 'USA', 1, false, 'Paris']

// Мы можем получить сет объектов, но уникальности у них не будет
const setObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
console.log(setObj); // Set(3) {{a: 1}, {b: 2}, {b: 2}}

// Мы можем создать сет не только из массива, но и из строки
console.log(new Set('abcd')); // Set(4) {'a', 'b', 'c', 'd'}

// Но если мы возьмем неитерабельный объект, то получим ошибку
// console.log(new Set({ a: 1 }));    // Uncaught TypeError: object is not iterable
// console.log(new Set(false));    // Uncaught TypeError: boolean false is not iterable

// clear(): Удаляет все элементы из Set.
setFlights.clear();
console.log(setFlights); // Set(0) {size: 0}
