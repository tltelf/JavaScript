'use strict';

/* Принцип разделения интерфейса
  (Interface Segregation Principle, ISP):
  клиенты не должны зависеть от интерфейсов, которые они не используют.
*/

// Правильно

class Weapon {
  cost;

  dealDamage() {}
}

class Rifle extends Weapon {
  shoot() {
    this.dealDamage();
  }
}

class Sword extends Weapon {
  strike() {
    this.dealDamage();
  }
}

// Неправильно

class Weapon2 {
  strike() {}

  shoot() {}
}

class Rifle2 extends Weapon2 {
  strike() {
    // Удар неэффективен для винтовки
  }

  shoot() {
    // Выстрел эффективен для винтовки
  }
}

class Sword2 extends Weapon2 {
  strike() {
    // Удар эффективен для меча
  }

  shoot() {
    // Выстрел неэффективен для меча
  }
}
