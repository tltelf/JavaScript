const str = 'Вася Пупкина';
console.log(str.includes('а'));
console.log(str.startsWith('В'));
console.log(str.endsWith('н'));
console.log(new String('Вася Пупкин').includes('а'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Ф'));
console.log(str.replace('П', 'Д'));
console.log(str.replace('а', 'и'));
console.log(str.replaceAll('а', 'и'));
console.log(str.replace(/а/g, 'и'));

const str2 = ' Вася Пупкина  \n';
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());
