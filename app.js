'use strict';

/*
	Напишите функцию, которая принимает 3 параметра:
	- Сумма
	- Валюта исходная
	- Валюта для конвертации
	И возвращает строку уже сконвертированной суммы с постфиксом
	валюты. Если не смог, то null.
	Для примера 3 валюты.
*/

function convert(amount, fromCurrency, toCurrency) {
  const convertCourse = {
    RUB: {
      USD: 0.009971,
      EUR: 0.00941,
    },
    USD: {
      RUB: 100.2955,
      EUR: 0.9438,
    },
    EUR: {
      RUB: 106.2677,
      USD: 1.0595,
    },
  };
  if (
    !convertCourse[fromCurrency] ||
    !convertCourse[fromCurrency][toCurrency]
  ) {
    return null;
  }
  const sum = (amount * convertCourse[fromCurrency][toCurrency]).toFixed(2);
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: toCurrency,
  }).format(sum);
}

console.log(convert(100, 'USD', 'RUB')); // 10 029,55 ₽
console.log(convert(100, 'EUR', 'RUB')); // 10 626,77 ₽
console.log(convert(1000, 'EUR', 'USD')); // 1 059,50 $
console.log(convert(1000, 'EUR', 'RUB')); // 106 267,70 ₽
console.log(convert(50000, 'RUB', 'USD')); // 498,55 $

console.log(convert(1000, 'TG', 'USD')); // null
console.log(convert(100, 'USD', 'GB')); // null

function convertCurrency(amount, fromCurrency, toCurrency) {
  // Статический набор курсов обмена валют
  const exchangeRates = {
    USD: {
      EUR: 0.85,
      GBP: 0.72,
    },
    EUR: {
      USD: 1.18,
      GBP: 0.85,
    },
    GBP: {
      USD: 1.39,
      EUR: 1.17,
    },
  };

  // Проверяем, есть ли курс обмена для указанных валют
  if (
    !exchangeRates[fromCurrency] ||
    !exchangeRates[fromCurrency][toCurrency]
  ) {
    return null;
  }

  // Выполняем конвертацию
  const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

  // Возвращаем строку с конвертированной суммой и валютой
  return `${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// Примеры использования:
console.log(convertCurrency(100, 'USD', 'EUR')); // "85.00 EUR"
console.log(convertCurrency(50, 'EUR', 'GBP')); // "42.50 GBP"
console.log(convertCurrency(75, 'GBP', 'USD')); // "104.25 USD"
console.log(convertCurrency(100, 'USD', 'JPY')); // null
