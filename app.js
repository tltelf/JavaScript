const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);                               // ['Вася', 'Маша', 'Катя', 'Аня']
users.sort();
console.log(users);                               // ['Аня', 'Вася', 'Катя', 'Маша']

const operations = [100, -300, -100, 50, 480];
console.log(operations);                          // [100, -300, -100, 50, 480]
operations.sort();
console.log(operations);                          // [-100, -300, 100, 480, 50]

// < 0 - a, b - сохраняем порядок
// > 0 - b, a - меняем порядок
const transactions = [100, -300, -100, 50, 480];
// transactions.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
transactions.sort((a, b) => a - b);
console.log('transactions: ', transactions);      // [-300, -100, 50, 100, 480]

const transactions2 = [100, -300, -100, 50, 480];
transactions2.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log('transactions2: ', transactions2);    // [480, 100, 50, -100, -300]
