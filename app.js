'use strict';

/*
	Сделать класс врага со здоровьем и методом получения урона
	Сделать класс меча, который имеет силу и метод нанесения
	урона.
	Сделать класс орка, который в 50% случаев не получает урон.
*/

class Enemy {
  constructor(health) {
    this.health = health;
  }

  takeDamage(dmg) {
    this.health = this.health - dmg;
    console.log(
      `Нанесено ${dmg} урона врагу. Осталось ${this.health} здоровья`
    );
  }
}

class Ork extends Enemy {
  constructor(health) {
    super(health);
  }

  takeDamage(dmg) {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Вероятность 50%: выполнить этот код, если случайное число меньше 0.5
      this.health = this.health - dmg;
      console.log(
        `Нанесено ${dmg} урона Орку. Осталось ${this.health} здоровья`
      );
    } else {
      // Вероятность 50%: выполнить этот код, если случайное число больше или равно 0.5
      console.log(`Промах по Орку`);
    }
  }
}

class Sword {
  constructor(damage) {
    this.damage = damage;
  }

  makeDamage(enemy) {
    enemy.takeDamage(this.damage);
  }
}

const ork = new Ork(300);
const sword = new Sword(30);
const enemy = new Enemy(100);
console.log(ork);
console.log(enemy);
sword.makeDamage(ork);
sword.makeDamage(ork);
sword.makeDamage(ork);
sword.makeDamage(enemy);

/* Второй способ */

// Класс Врага
class Enemy2 {
  constructor(health) {
    this.health = health;
  }

  // Метод для получения урона
  takeDamage(damage) {
    this.health -= damage;
    console.log(`Враг получил ${damage} урона. Здоровье врага: ${this.health}`);
  }
}

// Класс Меча
class Sword2 {
  constructor(power) {
    this.power = power;
  }

  // Метод для нанесения урона
  attack(target) {
    console.log(`Меч атакует врага.`);
    target.takeDamage(this.power);
  }
}

// Класс Орка
class Orc2 {
  constructor() {
    this.probability = 0.5; // 50% вероятность не получить урон
    this.health = 100;
  }

  // Метод для получения урона
  takeDamage(damage) {
    if (Math.random() < this.probability) {
      console.log('Орк уклонился от атаки и не получил урон!');
    } else {
      this.health -= damage;
      console.log(`Орк получил ${damage} урона. Здоровье орка: ${this.health}`);
    }
  }
}

// Пример использования классов
const enemy2 = new Enemy2(200);
const sword2 = new Sword2(50);
const orc2 = new Orc2();

sword2.attack(enemy); // Меч атакует врага и наносит 50 урона
orc2.takeDamage(30); // Орк получает урон
orc2.takeDamage(40); // Орк уклоняется от урона (50% вероятность)
