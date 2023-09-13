const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', 'Задача 5'];

for(let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 3') {
    continue;
  }
  console.log(tasks[i]);
}

console.log('--------');

for(let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 3') {
    break;
  }
  console.log(tasks[i]);
}
