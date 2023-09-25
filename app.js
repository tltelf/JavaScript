'use strict';

const audi = {
  make: 'Audi',
  model: 'A3',
  damages: []
};

const carManipulation = {
  addDamage(part, rate) {
    this.damages.push({ part, rate });
    console.log(`Добавили повреждение на ${this.make} ${this.model}`);
  }
}

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('крыло', 3);
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'крыша');
addDamageAudiRoof(5);
console.log(audi);
