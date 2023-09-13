/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

function addTask(arr, task) {
  arr.push(task);
}

function deleteTask(arr, task) {
  const index = arr.indexOf(task);
  if (index === -1) {
    return;
  }
  arr.splice(index, 1);
}

function prioritizeTask(arr, task) {
  const index = arr.indexOf(task);
  if (index === -1) {
    return;
  }
  const oldTask = arr[index];
  arr.splice(index, 1);
  arr.unshift(oldTask);
}

addTask(tasks, 'Задача 2');
addTask(tasks, 'Задача 3');
addTask(tasks, 'Задача 4');
addTask(tasks, 'Задача 5');
console.log(tasks);                         // ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', 'Задача 5']
deleteTask(tasks, 'Задача 3');
console.log(tasks);                         // ['Задача 1', 'Задача 2', 'Задача 4', 'Задача 5']
prioritizeTask(tasks, 'Задача 4');
prioritizeTask(tasks, 'Задача 2');
console.log(tasks);                         // ['Задача 2', 'Задача 4', 'Задача 1', 'Задача 5']
