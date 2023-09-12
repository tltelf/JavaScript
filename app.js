const roles = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);                                 // 1
const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2);                                // -1

if (roles.indexOf('admin') >= 0) {
  console.log('Доступ есть');                         // Доступ есть
}

console.log(roles.includes('admin'));                 // true
console.log(roles.includes('superuser'));             // false

if (roles.includes('admin')) {
  console.log('Доступ есть');                         // Доступ есть
} else {
  console.log('Доступа нет');
}
