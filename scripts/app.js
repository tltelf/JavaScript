'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY'

/* page */
const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  }
}

/* utils */
function loadData() {
  const habbitString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
  console.log(habbits);
};

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
};

/* render */
function rerenderMenu(activeHabbit) {
  // если нет активной привычки (habbit), то делаем return и ничего не рендерим
  if (!activeHabbit) {
    return;
  }
  // если есть активная привычка (habbit), то мы проходимся по массиву и каждый элемент (привычку (habbit)) рендерим
  for (const habbit of habbits) {
    // находим элемент, в котором menu-habbit-id = habbit.id
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    // если не существует такой привычки, то создаем
    if (!existed) {
      // создание
      const element = document.createElement('button');
      // добавляем атрибут, по которому будем искать
      element.setAttribute('menu-habbit-id', habbit.id);
      // добавляем класс
      element.classList.add('menu__item');
      // добавляем обработчик событий на element
      element.addEventListener('click', () => rerender(habbit.id));
      // добавляем этому элементу внутренний HTML
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`
      if (activeHabbit.id === habbit.id) {
        // добавляем class active
        element.classList.add('menu__item_active');
      }
      page.menu.appendChild(element);
      // добавляем continue, чтобы цикл прошел по всем элементам массива
      continue;
    }
    // если нашли привычку и она должна быть активна то
    if (activeHabbit.id === habbit.id) {
      // добавляем class active
      existed.classList.add('menu__item_active');
    } else {
      // если не должна быть активна, то удаляем class active
      existed.classList.remove('menu__item_active');
    }

  }
};

function rerenderHead(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  page.header.h1.innerText = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1
    ? 100
    : activeHabbit.days.length / activeHabbit.target * 100;
                                              // округляем до целого
  page.header.progressPercent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
};

function rerender(activeHabbitId) {
  // находим активную привычку (habbit)
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
};

/* init */
(() => {
  loadData();
  rerender(habbits[0].id);
})();
