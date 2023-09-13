const userData = ['Вася', 18, 'Тольятти'];

function getData() {
  return ['Вася', 18, 'Тольятти']
}

// const userName = getData()[0];
// const userAge = userData[1];
// const userCity = userData[2];

const [userName, _, userCity] = userData;

console.log(userName, userCity);          // Вася Тольятти
