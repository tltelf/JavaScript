'use strict';

console.log('A');
const messages = ['Bash!', 'Boom!'];

const boomTimer = setTimeout(
  (message, message2) => {
    console.log('B');
    console.log(message);
    console.log(message2);
  },
  1000,
  ...messages
);

// удаляем таймер
// clearTimeout(boomTimer);

console.log('C');
