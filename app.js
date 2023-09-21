const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: [
    'Программирование',
    'Готовка'
  ],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ'
};

console.log(user);
console.log(user.name);             // Вася
console.log(user.skills);           // [ 'Программирование', 'Готовка' ]
console.log(user.skills[0]);        // Программирование

console.log(user['skills']);        // [ 'Программирование', 'Готовка' ]

const level = 'Pro';
console.log(user['edu' + level]);   // МФТИ

// const res = prompt('Введите свойство');
// console.log(user[res]);
user['city'] = 'Москва';
console.log(user);

user.age = 26;
user['age'] = 26;
console.log(user);
