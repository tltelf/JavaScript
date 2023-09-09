function logName(name, surname) {
  console.log(`Мое имя ${name} ${surname}`);
}

logName('Василий', 'Пупкин');

function countDepositSum(depositInUSD, month, rate) {
  return depositInUSD * (1 + rate / 12) ** month;
}

const example = countDepositSum(1000, 24, 0.12);
console.log(example);

console.log(countDepositSum(1000, 48, 0.11));