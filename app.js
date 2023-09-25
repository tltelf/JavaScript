'use strict';

const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
  addDamage(part, rate) {
    console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: - повреждение ${part} со степенью ${rate}`);
    this.damages.push({
      part,
      rate
    })
  }
};
// audi.addDamage('капот', 1);                                // У авто Audi A3 2021 добавлено: - повреждение капот со степенью 1

const bmw = {
  make: 'BMW',
  model: 'X5',
  year: 2022,
  damages: [],
};

// bmw.addDamage = audi.addDamage;                               
// bmw.addDamage('бампер', 2);                                // У авто BMW X5 2022 добавлено: - повреждение бампер со степенью 2

const addDamageFunc = audi.addDamage;
// addDamageFunc('бампер', 2);                                // Uncaught TypeError: Cannot read properties of undefined (reading 'make')
// Call вызывается с двумя аргументами
addDamageFunc.call(audi, 'капот', 1);                         // У авто Audi A3 2021 добавлено: - повреждение капот со степенью 1
addDamageFunc.call(bmw, ...['бампер', 2]);                    // У авто BMW X5 2022 добавлено: - повреждение бампер со степенью 2

// Apply вызывается в массивом аргументов
addDamageFunc.apply(bmw, ['бампер', 2]);                      // У авто BMW X5 2022 добавлено: - повреждение бампер со степенью 2
addDamageFunc.apply(bmw, ['бампер', 2]);                      // У авто Audi A3 2021 добавлено: - повреждение бампер со степенью 2
