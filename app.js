'use strict';

/* Принцип единственной ответственности 
  (Single Responsibility Principle - SRP):
  класс должен быть ответственным только за одну важную функциональность или задачу.
*/

class Character {
  #inventory = [];
  #health = 10;

  pickItem(item) {
    this.#inventory.push(item);
  }

  recieveDamage(damage) {
    this.#health -= damage;
  }
}

class DB {
  save(item) {
    localStorage.setItem('char', item);
  }

  load() {
    ///...
  }
}
