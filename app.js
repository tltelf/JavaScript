'use strict';

/* Принцип открытости/закрытости 
  (Open/Closed Principle, OCP):
  классы должны быть открытыми для расширения, но закрытыми для изменения.
*/

class Treasure {
  value = 0;
}

class Coin extends Treasure {
  value = 1;
}

class Crystal extends Treasure {
  value = 10;
}

class Brilliant extends Treasure {
  value = 20;
}

// Правильно
class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value;
  }
}

// Неправильно
class Inventory2 {
  #score;
  pick(treasure) {
    if (treasure instanceof Coin) {
      this.#score += 1;
    }
    if (treasure instanceof Crystal) {
      this.#score += 10;
    }
    /* При добавлении бриллианта в игру,
       придется добавлять дополнительную логику в класс, 
       в отличии от первого способа
    */
  }
}
