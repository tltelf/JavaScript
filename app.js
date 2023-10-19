'use strict';

// Определение базового класса Book
const Book = function (title, author) {
  this.title = title; // Свойство заголовка книги
  this.author = author; // Свойство автора книги
};

// Добавление метода "buy" к прототипу "Book"
Book.prototype.buy = function () {
  console.log('Buy');
};

// Создание класса "AudioBook", который наследуется от "Book"
const AudioBook = function (title, author, lenMin) {
  // Вызов конструктора базового класса с помощью call для инициализации свойств title и author
  Book.call(this, title, author);
  // Добавление нового свойства: длительность аудиокниги в минутах
  this.lenMin = lenMin;
};

// Настройка прототипного наследования
// Создание прототипной связи между AudioBook и Book
AudioBook.prototype = Object.create(Book.prototype); // "AudioBook" наследует методы от "Book"

// Переопределение конструктора для AudioBook, чтобы он указывал на AudioBook
AudioBook.prototype.constructor = AudioBook;

// Добавление нового метода "log" для "AudioBook"
AudioBook.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMin}`);
};

// Создание экземпляра AudioBook с передачей параметров 'Lord Of The Rings', 'Tolkien' и 20 * 60
const book = new AudioBook('Lord Of The Rings', 'Tolkien', 20 * 60);

// Вызов метода log, определенного в AudioBook
book.log();

// Вызов метода buy, унаследованного от Book
book.buy();

// Вывод информации о книге в консоль
console.log(book);

// Проверка экземпляра book на принадлежность к классам AudioBook и Book
console.log(book instanceof AudioBook); // Возвращает true, так как "book" является экземпляром "AudioBook"
console.log(book instanceof Book); // Возвращает true, так как "AudioBook" наследуется от "Book"
