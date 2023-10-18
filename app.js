'use strict';

// Создаем объект "task" с помощью литералов объекта
const task = {
  title: 'Task1', // Задаем свойство "title" с названием задачи
  dueTo: new Date('2023/01/01'), // Задаем свойство "dueTo" с датой завершения задачи

  // Создаем геттер "isOverdue" для проверки, просрочена ли задача
  get isOverdue() {
    return this.dueTo < new Date();
  },

  // Создаем сеттер "isOverdue" для установки значения "isOverdue"
  set isOverdue(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date(); // Если задача не просрочена, устанавливаем дату завершения на текущую
    }
  },
};

// Выводим результат выполнения геттера "isOverdue" (задача просрочена)
console.log(task.isOverdue);

// Вызываем сеттер "isOverdue" для установки значения "isOverdue" в "false"
task.isOverdue = false;

// Выводим объект "task" с обновленной датой завершения
console.log(task);

// Определяем класс "Task" для создания задач
class Task {
  constructor(title, dueDate) {
    this.title = title; // Задаем свойство "title" с названием задачи
    this.dueDate = dueDate; // Задаем свойство "dueDate" с датой завершения задачи
  }

  // Создаем геттер "isOverdue" для проверки, просрочена ли задача
  get isOverdue() {
    return this.dueTo < new Date();
  }

  // Создаем сеттер "dueDate" для установки значения "dueDate"
  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date;
  }
}

// Создаем новый объект "newTask" с использованием класса "Task"
const newTask = new Task('Task2', new Date());

// Устанавливаем значение "dueDate" через сеттер (дата задачи установлена на "2024/1/1")
console.log((newTask.dueDate = new Date('2024/1/1')));

// Выводим результат выполнения геттера "isOverdue" (задача не просрочена)
console.log(newTask.isOverdue);

// Выводим объект "newTask" с обновленной датой завершения
console.log(newTask);
