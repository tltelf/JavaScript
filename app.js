const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);
console.log(roles);                         // ['user', 'admin', 'manager', 'superuser']
console.log(res);                           // ['manager', 'superuser']

const res2 = roles.slice(0, 2);
console.log(res2);                          // ['user', 'admin']

// -1 берет последний эл. массива, -2 два последних
const res3 = roles.slice(-2);               // ['manager', 'superuser']
console.log(res3);

const res4 = roles.slice(1, -2);
console.log(res4);                          // ['admin']

console.log(roles);                         // ['user', 'admin', 'manager', 'superuser']

// const res5 = roles.splice(2);
// console.log(res5);                          // ['manager', 'superuser']
// console.log(roles);                         // ['user', 'admin']

// const res6 = roles.splice(2, 1);
// console.log(res6);                          // ['manager']
// console.log(roles);                         // ['user', 'admin', 'superuser']

// const res7 = roles.splice(-1);
// console.log(res7);                          // ['superuser']
// console.log(roles);                         // ['user', 'admin', 'manager']

const res8 = roles.reverse();
console.log(res8);                             // ['superuser', 'manager', 'admin', 'user']
console.log(roles);                            // ['superuser', 'manager', 'admin', 'user']

const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);                             // ['superuser', 'manager', 'admin', 'user', 'sysadmin', 'developer']
