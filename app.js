'use strict';
/*
	Создайте объект пользователя с паролем.
	С помощью функции ниже удалить пароль сделав
	функцию сброса пароля
 */

function removePassword(reset) {
	if (reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
};

const user = {
  password: 'pass12345'
};

console.log(user);                                    // {password: 'pass12345'}
removePassword.call(user, true);                      // Связываем с помощью call и удаляем пароль
console.log(user);                                    // {password: undefined}
user.password = 'NewPass';                            // Добавляем новый пароль
console.log(user);                                    // {password: 'NewPass'}
removePassword.apply(user, [true]);                   // Связываем с помощью apply и удаляем пароль
console.log(user);                                    // {password: undefined}
user.password = 'NEWPASS2';                           // Добавляем новый пароль
console.log(user);                                    // {password: 'NEWPASS2'}
const resetPassUser = removePassword.bind(user);      // Связываем с помощью bind
resetPassUser(true);                                  // Удаляем пароль
console.log(user);                                    // {password: undefined}
