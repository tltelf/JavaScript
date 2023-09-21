const initialBalance = 7;

const wallet = {
	balance: initialBalance,
	operations: [],
};

const balance = 10000;

const wallet2 = {
  // balance = balance равносильно balance
  // Если название значения ключа совпадает с именем ключа, то можно опускать второе значение.
	balance,
	operations: [],
};

console.log(wallet2.balance);     // 10000
