'use strict';
/*
    дополнить объект методами для получения имени:
    - компании
    - сео
    - сотрудника
*/

const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getName: function () {
        return this.name;
      }
    }
  ],
  ceo: {
    name: 'Вася',
    getCeoName: function () {
      return this.name;
    }
  },
  getCompanyName: function () {
    return this.name;
  }
};

console.log(company.getCompanyName());
console.log(company.employees.map(i => i.getName()));
console.log(company.ceo.getCeoName());
