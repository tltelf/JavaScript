'use strict';

const options1 = {
  style: 'currency',
  currency: 'RUB',
};

const options2 = {
  style: 'currency',
  currency: 'RUB',
  useGrouping: false,
};

const options3 = {
  style: 'currency',
  currency: 'USD',
};

const options4 = {
  style: 'decimal',
};

const options5 = {
  style: 'percent',
};

const options6 = {
  style: 'unit',
  unit: 'celsius',
};

console.log(23000); // 23000
console.log(new Intl.NumberFormat('ru-RU', options1).format(23000)); // 23 000,00 ₽
console.log(new Intl.NumberFormat('ru-RU', options2).format(23000)); // 23000,00 ₽
console.log(new Intl.NumberFormat('en-US', options3).format(23000)); // $23,000.00
console.log(new Intl.NumberFormat('ar-SY', options4).format(23000)); // ٢٣٬٠٠٠٫٠٠ US$
console.log(new Intl.NumberFormat('ru-RU', options5).format(0.1)); // 10 %
console.log(new Intl.NumberFormat('ru-RU', options6).format(25)); // 25 °C
