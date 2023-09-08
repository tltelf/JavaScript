const age = '18';

console.log(Number(age) + 5);         // 23

console.log(age - 3);                 // 15

console.log(age / 3);                 // 6

console.log(age * 3);                 // 54

const userName = 'Вася';

console.log(Number(userName) + 5);    // NaN

console.log(typeof NaN);              // number

console.log(String(4) + 7);           // 47

console.log(Boolean(0));              // fasle

console.log(Boolean(1));              // true

console.log(Boolean(123));            // true

console.log(Boolean(-1));             // true

console.log(Boolean('asdw'));         // true

console.log(Boolean(''));             // false

console.log(Boolean('') + 10);        // 10

console.log(true + 2);                // 3

const a = 2 + '10';
console.log(a);                       // 210
console.log(a - 10);                  // 200