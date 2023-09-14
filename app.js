const arr = [1, 4, 8, 7, 'str'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('-----');

// for of итерируется по значениям массива
for (let element of arr) {
  console.log(element);
}

console.log('-----');

// for in итерируется по индексам массива
for (let index in arr) {
  console.log(arr[index]);
}
