'use strict';

// Создаем функцию-конструктор Book, принимающую title и author в качестве параметров
const Book = function (title, author) {
  this.author = author;
  this.title = title;
};

// Добавляем свойство isRead к прототипу Book, доступное для всех объектов, созданных с Book
Book.prototype.isRead = false;

// Создаем объект lordOftheRings с использованием функции-конструктора Book
const lordOftheRings = new Book('1', '1');

// Выводим в консоль различные прототипы и объекты

// Прототип Book, содержащий свойство isRead
console.log(Book.prototype);

// Прототип функции-конструктора Book, указывающий на Function.prototype
console.log(Book.__proto__);

// Прототип объекта lordOftheRings, указывающий на прототип Book
console.log(lordOftheRings.__proto__);

// Прототип Book.prototype, указывающий на Object.prototype
console.log(Book.prototype.__proto__);

// Прототип всех объектов, указывающий на null (вершина цепочки прототипов)
console.log(Object.prototype.__proto__);
