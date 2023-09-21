let user = {
  name: 'Вася',
  age: 20,
  city: 'Moscow'
}

const { age, ...userWirhoutAge } = user;
console.log(age);
console.log(userWirhoutAge);

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  creditCard: '2342-4235-2312-2312'
};

// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;
user = {
  ...user,
  ...additionalData,
}
console.log(user);
