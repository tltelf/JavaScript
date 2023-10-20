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

class Troll extends Enemy {}

class Sword {
  constructor(damage) {
    this.damage = damage;
  }

  makeDamage(enemy) {
    enemy.takeDamage(this.damage);
  }
}

const ork = new Ork(300);
const troll = new Troll(200);
const sword = new Sword(30);
const enemy = new Enemy(100);
console.log(ork);
console.log(enemy);
sword.makeDamage(ork);
sword.makeDamage(ork);
sword.makeDamage(ork);
sword.makeDamage(troll);
sword.makeDamage(troll);
sword.makeDamage(enemy);
