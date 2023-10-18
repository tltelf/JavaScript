'use strict';

// Создаем функцию-конструктор Book
const Book = function (title, author) {
  // Инициализируем свойства объекта
  this.author = author;
  this.title = title;
  this.isRead = false; // Устанавливаем свойство isRead в false
};

// Добавляем метод read к прототипу объекта Book
Book.prototype.read = function () {
  this.isRead = true; // Метод помечает книгу как прочитанную
};

// Создаем класс BookClass
class BookClass {
  isRead = false; // Свойство isRead

  constructor(title, author) {
    // Инициализируем свойства объекта
    this.author = author;
    this.title = title;
  }

  read() {
    this.isRead = true; // Метод помечает книгу как прочитанную
  }
}

// Создаем экземпляр объекта lordOftheRings с использованием класса BookClass
const lordOftheRings = new BookClass('lordOftheRings', 'Tolkien');

// Проверяем, принадлежит ли lordOftheRings классу BookClass
console.log(lordOftheRings instanceof BookClass);

// Вызываем метод read для объекта lordOftheRings

lordOftheRings.read();

// Выводим в консоль прототип объекта lordOftheRings.
// В данном случае, он указывает на прототип класса BookClass.
console.log(lordOftheRings.__proto__);

// Определяем анонимный класс BookClass2
const BookClass2 = class {};
