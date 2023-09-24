'use strict'

let successMessage = 'Успех';
const user = {
  name: 'Вася',
  roles: []
};

function addRole(user, role) {
  if (role === 'admin') {
    const message = 'Ошибка';
    console.log(message);
    console.log(a);
    return user;
  }
  user.roles.push(role);
  let successMessage = 'Ура';
  console.log(successMessage);

  function logRoles() {
    const a = 3;
    console.log(user.roles);
  }
  logRoles();

  return user;
}

console.log(addRole(user, 'amind'));
console.log(successMessage);
