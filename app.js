/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

const age = 25;
const userMoney = 1500;
const productPrice = 2000;

function computeCredit(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuy(age, userMoney, productPrice, hasJob = false) {
  if (userMoney < productPrice) {
    const sumCredit = computeCredit(age, hasJob);
    userMoney += sumCredit;
    return userMoney >= productPrice;
  }
  return true;
}

console.log(canBuy(age, userMoney, productPrice, true));
