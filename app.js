'use strict';

const bigNum1 = 350_500_000;
const bigNum2 = 350500000;

const payment = 20_10;
const paymentInR = 20.1;
const paymentInR2 = 2_0.1_0;

console.log(Number('350_500_000')); // NaN
console.log(Number('350500000')); // 350500000
