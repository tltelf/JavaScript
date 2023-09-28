'use strict';

// Получение 1 элемента
console.log(document.querySelector('.one').innerText);
console.log(document.querySelector('span').innerText);
console.log(document.querySelector('.one > span').innerText);
console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.getElementsByClassName('one')[0].innerText);

// Получение 2 элемента
console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelectorAll('.one')[1].innerText);
console.log(document.getElementsByClassName('one')[1].innerText);

// Получение 3 элемента
console.log(document.querySelector('#two').innerText);
console.log(document.getElementById('two').innerText);

// Получение 4 элемента
console.log(document.querySelector('[user-id="4"]').innerText);
