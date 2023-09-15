const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for (const transaction of transactionInUSD) {
  transactionInRUB.push(transaction * 60);
}

// console.log(transactionInUSD);       // [10, -7, 50, -10, 100]
// console.log(transactionInRUB);       // [600, -420, 3000, -600, 6000]

const transactionInRUB2 = transactionInUSD.map((transaction) => transaction * 60);

console.log(transactionInUSD);
console.log(transactionInRUB2);
