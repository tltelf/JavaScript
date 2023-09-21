const userFullName = 'Вася Пупкин Васильевич';
// Метод split переводит строку в массив, принимает символ по которому нужно разделять строку
console.log(userFullName.split(' '));                                 // [ 'Вася', 'Пупкин', 'Васильевич' ]
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);
console.log(familyName);
console.log(lastName);
const arr = ['Ты', 'знаешь', 'JS'];
// Метод join переводит массив в строку, принимает символ который будет разделять элементы массива
console.log(arr.join(' '));                                           // Ты знаешь JS
