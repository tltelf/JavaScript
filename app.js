/* 
	Найти среднее значение последовательности
	чисел с помощью reduce
*/
const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, num, i, array) => {
  if (i === array.length - 1) {
    return (acc + num) / array.length;
  }
  return acc + num;
}, 0);

console.log(avg);
