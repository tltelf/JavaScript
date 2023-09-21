const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  getFullName: function() {
    return this.name + ' ' + this.surname;
  }
};

console.log(user.getFullName());

function getFullName(user) {
  return user.name + ' ' + user.surname;
}

const arr = [1, 2];
arr.sort();
'adsadasd'.toLowerCase();
