const operations = [100, -20, 7, -10, 50];

// const positiveOperations = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }
// console.log(positiveOperations);

const positiveOperations = operations.filter(operation => operation > 0);
const negativeOperations = operations.filter(operation => operation < 0);
const positiveRUBOperations = operations
  .filter(operation => operation > 0)
  .map(operation => operation * 60);

console.log(positiveOperations);      // [100, 7, 50]
console.log(negativeOperations);      // [-20, -10]
console.log(positiveRUBOperations);   // [6000, 420, 3000]
