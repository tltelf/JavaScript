/*
	Методом prompt получите ответ пользователя
	на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
	выведите в консоле "Успех", если нет - "Вы робот!",
	а если он введёт "Я не робот", то тоже "Успех".
*/

const answer = prompt('Сколько будет 7 + или - 15?');

switch(true) {
  case Number(answer) === 22:
  case Number(answer) === -8:
  case answer === 'Я не робот':
    console.log('Успех');
    break;
  default:
    console.log('Вы робот!');
}

if (answer === 'Я не робот') {
  console.log('Успех');
} else {
  const resNum = Number(answer);
  switch(resNum) {
    case 22:
    case -8:
      console.log('Успех');
      break;
    default:
      console.log('Вы робот!');
  }
}