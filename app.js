'use strict';

// console.log(this);
// console.log(window);

function addNum(num1, num2) {
  console.log(this);
  return num1 + num2;
};
// addNum();

const addNum2 = (num1, num2) => {
  console.log(this);
  return num1 + num2;
};
// addNum2();

const user = {
  name: 'Вася',
  surname: 'Пупкин',
  getFullName: function() {
    console.log(this);
    return this.name + ' ' + this.surname;
  }
}

user.getFullName();

const user2 = {
  name: 'Марина',
  surname: 'Катц'
};

user2.getFullName = user.getFullName;
user2.getFullName();

const getFullName = user2.getFullName;
getFullName();
