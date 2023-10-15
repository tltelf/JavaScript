'use strict';

const Book = function (title, author) {
  this.author = author;
  this.title = title;
  this.isRead = false;
};

Book.prototype.read = function () {
  this.isRead = true;
};

Book.prototype.cover = 'Paper';

const lordOftheRing = new Book('Lord of the ring', 'Tolkien');
lordOftheRing.read();

console.log(lordOftheRing); // Book {author: 'Tolkien', title: 'Lord of the ring', isRead: true}
console.log(lordOftheRing.cover); // Paper
console.log(lordOftheRing.hasOwnProperty('cover')); // false
console.log(lordOftheRing.hasOwnProperty('author')); // true

console.log(lordOftheRing.__proto__); // {cover: 'Paper', read: ƒ, constructor: ƒ}
console.log(lordOftheRing.__proto__ === Book.prototype); // true
console.log(Book.prototype.isPrototypeOf(lordOftheRing)); // true
console.log(Book.prototype.isPrototypeOf(Book)); // false

Array.prototype.first = function () {};

const a = [5];
a.first;
