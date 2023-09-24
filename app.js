'use strict'

addUser();                                  // User added
// console.log(c);                          // Uncaught ReferenceError: c is not defined
// console.log(a);                          // Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(b);                             // undefined
const a = 3;
var b = 2;
console.log(b);                             // 2
console.log(a);                             // 3

function addUser() {
  console.log('User added');
};

addUser();                                  // User added

// arr1();                                  // Uncaught ReferenceError: Cannot access 'arr1' before initialization
const arr1 = () => {
  console.log('arr1');
};

arr1();                                     // arr1
