'use strict';

/*
	Реализовать класс пользователя, со свойствами
	- логин
	- пароль
	Причём пароль при установке должен переворачиваться
	и в таком виде храниться.
	Пароль и логин после создания изменить нельзя. Так же у
	класса добавить методы
	- Смены пароля (передаём старый и новый пароль)
	- Сверки пароля
*/

class User {
  #login;
  #_password;
  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  get login() {
    return this.#login;
  }

  set #password(password) {
    this.#_password = password.split('').reverse().join('');
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  checkPass(password) {
    return this.#password === password;
  }

  changePass(oldPass, newPass) {
    if (!this.checkPass(oldPass)) {
      console.log('Вы ввели неверный пароль');
      return;
    }
    console.log('Пароль успешно изменен!');
    this.#_password = newPass.split('').reverse().join('');
  }
}

const user = new User('abc@gmail.com', '12345');
console.log(user); // User {#login: 'abc@gmail.com', #_password: '54321'}
console.log(user.checkPass('12345')); // true
user.changePass('12678', 'abcdef'); // Вы ввели неверный пароль
user.changePass('12345', 'abcdef'); // Пароль успешно изменен!
console.log(user); // User {#login: 'abc@gmail.com', #_password: 'fedcba'}

class User2 {
  #login;
  #password;

  constructor(login, password) {
    this.#login = login;
    this.#password = this.reversePassword(password);
  }

  reversePassword(password) {
    return password.split('').reverse().join('');
  }

  changePassword(oldPassword, newPassword) {
    if (this.verifyPassword(oldPassword)) {
      this.#password = this.reversePassword(newPassword);
      console.log('Пароль успешно изменен!');
      return true; // Пароль успешно изменен
    } else {
      return false; // Не удалось изменить пароль
    }
  }

  verifyPassword(passwordToCheck) {
    return this.#password === this.reversePassword(passwordToCheck);
  }

  getLogin() {
    return this.#login;
  }

  // Методы для получения логина и проверки пароля
}

const user2 = new User2('Логин', '123');
console.log(user2.getLogin()); // Логин
console.log(user2.verifyPassword('123')); // true
console.log(user2.verifyPassword('456')); // false

user2.changePassword('123', '789'); // Пароль успешно изменен!
console.log(user2.verifyPassword('789')); // true
