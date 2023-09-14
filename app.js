/*
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10000];
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- Итогового баланса
	- Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
	- Расчёта среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];

function getBalance() {
  let balance = 100;
  for (const el of operations) {
    balance += el;
  }
  return balance;
}

function isPositiveBalance() {
  let balance = 100;
  for (let i = 0; i < operations.length; i++) {
    balance += operations[i];
    if (balance < 0) {
      return false;
    }
  }
  return true;
}

function checkOperations() {
  let balance = 100;
  let isOk = true;
  for (const el of operations) {
    balance += el;
    if (balance < 0) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

function getAverageValue() {
  let countPositive = 0;
  let countNegative = 0;
  let negative = 0;
  let positive = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] > 0) {
      positive += operations[i];
      countPositive++;
    } 
    if (operations[i] < 0) {
      negative += operations[i];
      countNegative++;
    }
  }
  return [positive / countPositive, negative / countNegative];
}

function avarageOperations() {
  let positiveCount = 0;
  let negativeCount = 0;
  let positiveSum = 0;
  let negativeSum = 0;
  for (const el of operations) {
    if (el > 0) {
      positiveCount++;
      positiveSum += el;
    }
    if (el < 0) {
      negativeCount++;
      negativeSum += el; 
    }
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log('getBalance: ', getBalance());
console.log('isPositiveBalance: ', isPositiveBalance());
console.log('checkOperations: ', checkOperations());
console.log('getAverageValue: ', getAverageValue());
console.log('avarageOperations: ', avarageOperations());
