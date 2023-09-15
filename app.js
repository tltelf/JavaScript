/*
	Написать функцию, которые возващает true,
	если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

// function some(arr, num) {
//   for (el of arr) {
//     if (el === num) {
//       return el;
//     }
//   }
// }

function some(arr, num) {
  return arr.find(el => el === num) === undefined ? false : true;
}

console.log(some(arr, 10));             // true

console.log(arr.some(el => el === 1));  // false
