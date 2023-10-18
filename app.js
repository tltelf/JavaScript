'use strict';

class Car {
  #vin; // Приватное свойство #vin

  speed; // Обычное свойство speed

  constructor() {
    this.#test2 = 5; // Приватное свойство #test2 (примечание: имя #test2 не определено выше)
    this.test3 = 5; // Обычное свойство test3
  }

  #changeVin() {
    console.log('changed');
  }

  test() {
    // Метод test класса Car
    this.#changeVin(); // Вызывает приватный метод #changeVin
  }

  static #field = 3; // Приватное статическое свойство #field

  static {
    this.#field = 5; // Инициализация приватного статического свойства #field в блоке static
  }
}

const car = new Car(); // Создаем экземпляр класса Car

car.test(); // Вызываем метод test экземпляра car
