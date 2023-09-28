'use strict';

// setItem записывает значение в localStorage
localStorage.setItem('token', 'sadasdas');
localStorage.setItem('token1', 1);
localStorage.setItem('token2', true);

// getItem получает значение из localStorage
console.log(localStorage.getItem('token'));             // sadasdas
console.log(typeof localStorage.getItem('token'));      // string

console.log(localStorage.getItem('token1'));            // 1
console.log(typeof localStorage.getItem('token1'));     // string

console.log(localStorage.getItem('token2'));            // true
console.log(typeof localStorage.getItem('token2'));     // string

// Удаляет конкретный item в localStorage
localStorage.removeItem('token1');

// Очищает localStorage
localStorage.clear();
