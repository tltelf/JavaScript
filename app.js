'use strict';

/*
	Сделать функцию, которая принимает пользователя и
	проверяет, есть ли у него сегодня день рождения или нет
*/

// Создание объектов пользователей с их именем и датой рождения
const user = {
  name: 'Vasia',
  birthday: '10/13/2023',
};

const user2 = {
  name: 'Petya',
  birthday: '10/16/2023',
};

// Первая функция, которая проверяет день рождения пользователя
function isBirthday(user) {
  // Получение текущей даты и времени
  const today = new Date();
  // Создание новой даты без времени (только год, месяц и день)
  const todayWithoutTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  // Преобразование даты дня рождения пользователя в объект Date
  const birthdayDate = new Date(user.birthday);
  // Сравнение текущей даты с днем рождения пользователя
  // Преобразуем обе даты в числа и сравниваем их
  return Number(todayWithoutTime) === Number(birthdayDate);
}

// Проверка первой функции для двух пользователей и вывод результата
console.log(isBirthday(user)); // true
console.log(isBirthday(user2)); // false

// Вторая функция, которая также проверяет день рождения пользователя
function isBirthday2(user) {
  // Получение текущей даты и времени
  const now = new Date();
  // Преобразование даты дня рождения пользователя в объект Date
  const userBirthdayDate = new Date(user.birthday);
  // Проверка, совпадает ли месяц и день дня рождения пользователя
  if (now.getMonth() !== userBirthdayDate.getMonth()) {
    return false;
  }
  if (now.getDate() !== userBirthdayDate.getDate()) {
    return false;
  }
  return true;
}

// Проверка второй функции для двух пользователей и вывод результата
console.log(isBirthday2(user)); // true
console.log(isBirthday2(user2)); // false
