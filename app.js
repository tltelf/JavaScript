const userName = 'Вася Пупкина';
console.log(userName);                      // Вася Пупкина
console.log(userName[0] + userName[1]);     // Ва
console.log(userName.charAt(2));            // с

console.log(userName.length);               // 12
console.log(userName.indexOf('а'));         // 1
console.log(userName.indexOf('уп'));        // 6
console.log(userName.indexOf('упв'));       // -1
console.log(userName.lastIndexOf('а'));     // 11
console.log(userName.includes('уп'));       // true
console.log(userName.includes('упd'));      // false

console.log(userName.slice(5));             // Пупкина
console.log(userName.slice(5, 8));          // Пуп
