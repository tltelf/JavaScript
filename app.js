'use strict';

let firstName = 'Vasya';
let firstName2 = firstName;
firstName = 'New';
// Примитивы хранятся на call stack
console.log(firstName);             // New
console.log(firstName2);            // Vasya

const user1 = {
  name: 'Vasya'
};

const user2 = user1;
user2.name = 'New';
// Ссылка на объект хранится в call stack, но сам объект хранится в куче (heap)
console.log(user1);                 // { name: 'New' }
console.log(user2);                 // { name: 'New' }
