/*
	Задача вывести в консоль строку "Я люблю JS !" из массива,
	проходя циклом в обратном порядке, не используя метод reverse.
	const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
let arrResult = [];
for (let i = arr.length - 1; i > -1; i--) {
  arrResult.push(arr[i]);
}
console.log(arrResult.join(' '));           // Я люблю JS !

console.log(arr.reverse().join(' '));       // Я люблю JS !
