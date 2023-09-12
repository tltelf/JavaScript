const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];
console.log(roles);                         // ['admin', 'user', 'superuser']
console.log(roles[0]);                      // 'admin'
// Длина массива
console.log(roles.length);                  // 3
// Последний элемент массива
console.log(roles[roles.length - 1]);       // superuser

console.log(roles.at(0));                   // admin
// Последний элемент массива
console.log(roles.at(-1));                  // superuser

// В массивах можно использовать вычисляемые значения
const usersAge = [2040 - 2022, 20 - '6', 10 > 0 ? 5 : 0];
console.log(usersAge);                      // [18, 14, 5]

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);
