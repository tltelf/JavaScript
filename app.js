'use strict';

const User = {
  init(email, password) {
    (this.email = email), (this.password = password);
  },
  log() {
    console.log('Log');
  },
};

const user = Object.create(User);
console.log(user);
user.log(); // Log
user.init('a@a.ru', '123');
console.log(user); // {email: 'a@a.ru', password: '123'}
console.log(user.__proto__ === User); // true

const admin = Object.create(user);
admin.init('B@B.ru', '56789');
console.log(admin); // {email: 'B@B.ru', password: '56789'}
