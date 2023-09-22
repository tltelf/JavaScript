/*
	Сделать объект склад с методами добавления на склад, поиска
	по складу товара и расчёт веса
*/

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find(good => good.id === id);
  },
  addGood: function (good) {
    if (this.findGoodById(good.id)) {
      console.log('Такой товар уже имеется на складе');
      return;
    }
    this.goods.push(good);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, good) => {
      if (good.weight?.kg) {
        acc += good.weight.kg;
      } 
      return acc;
    }, 0)
  }
};

/* товары */
const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
};

const chair = {
  id: 2,
  weight: {
    kg: 2
  },
};

const paper = {
  id: 3,
  color: 'red'
};

// const warehouse = {
//   goods: [],
//   findGoodById: function (id) {
//     return this.goods.find(el => el.id === id);
//   },
//   addGood: function (good) {
//     for (const el of this.goods) {
//       if (el.id === good.id) {
//         console.log('Этот товар уже присутствует на складе');
//         return;
//       }
//     }
//     this.goods.push(good);
//   },
//   getWeightKg: function () {
//     return this.goods.reduce((acc, good) => {
//         if (good?.weight?.kg) {
//           acc += good?.weight?.kg;
//         }
//         return acc;
//       }, 0)
//   }
// };

warehouse.addGood(car)
warehouse.addGood(car)
warehouse.addGood(chair)
warehouse.addGood(chair)
warehouse.addGood(paper)
console.log(warehouse.getWeightKg());
console.log(warehouse.findGoodById(1));
console.log(warehouse.goods);
