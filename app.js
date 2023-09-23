'use strict';

const user = {
  name: 'Vasya',
  id: 1,
};

// const newUser = user;
// user.name = 'NewUser';
// console.log(user);                         // { name: 'NewUser', id: 1 } 
// console.log(newUser);                      // { name: 'NewUser', id: 1 }

// const newUser = Object.assign({}, user);
// user.name = 'NewUser';
// console.log(user);                         // { name: 'NewUser', id: 1 }
// console.log(newUser);                      // { name: 'Vasya', id: 1 }

const newUser = {
  ...user
}
user.name = 'NewUser';
console.log(user);                            // { name: 'NewUser', id: 1 }
console.log(newUser);                         // { name: 'Vasya', id: 1 }
