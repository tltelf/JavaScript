console.log('Вася' || 'Олег');    // Вася
console.log(false || 'Олег');     // Олег
console.log(false || false);      // false

console.log('Вася' && 'Олег');    // Олег
console.log(false && 'Олег');     // false
console.log('Вася' && false);     // false
console.log(false || false);      // false

let a = 'Марина';
const userName = a || 'Петя';
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);