'use strict';

/* Принцип инверсии зависимостей
  (Dependency Inversion Principle - DIP):
  зависимости внутри системы должны строиться относительно абстракций, а не конкретных классов.
*/

class DB {
  save(items) {
    console.log(`Saved: ${items}`);
  }
}

class MongoDB extends DB {
  save(items) {
    console.log(`Saved to Mongo: ${items}`);
  }
}

// Здесь ToDoList не зависит от конкретной базы данных
class ToDoList {
  items = [1, 2, 3];
  db;

  constructor(db) {
    this.db = db;
  }

  saveToDb() {
    this.db.save(this.items);
  }
}

const list = new ToDoList(new DB());
list.saveToDb(); // Saved: 1,2,3
const list2 = new ToDoList(new MongoDB());
list2.saveToDb(); // Saved to Mongo: 1,2,3

// Здесь ToDoList зависит от конкретной базы данных
// и чтобы её поменять, придется менять код
class ToDoList2 {
  items = [1, 2, 3];
  db = new DB();

  saveToDb() {
    this.db.save(this.items);
  }
}
