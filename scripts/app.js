'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitId;

/* page */
const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
  main: {
		daysContainer: document.getElementById('days'),
		nextDay: document.querySelector('.habbit__day')
	},
  popup: document.querySelector('.cover'),
  iconField: document.querySelector('.popup__form input[name="icon"]')
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
  // if (!activeHabbit) {
  //   return;
  // }
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
  page.header.h1.innerText = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1
    ? 100
    : activeHabbit.days.length / activeHabbit.target * 100;
                                              // округляем до целого
  page.header.progressPercent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
};

function rerenderBody(activeHabbit) {
  page.main.daysContainer.innerHTML = '';
  const days = activeHabbit.days;
  for (let i = 0; i < days.length; i++) {
      const element = document.createElement('div');
      // добавляем класс
      element.classList.add('habbit');
      // добавляем этому элементу внутренний HTML
      element.innerHTML =
          `<div class="habbit__day">День ${i + 1}</div>
          <div class="habbit__comment">${days[i].comment}</div>
          <button onclick="deleteDay(${i})" class="habbit__delete">
            <img src="./images/delete.svg" alt="Иконка удаления">
          </button>`
      page.main.daysContainer.appendChild(element);
  }
  page.main.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;
};

function rerender(activeHabbitId) {
  globalActiveHabbitId = activeHabbitId;
  // находим активную привычку (habbit)
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
  if (!activeHabbit) {
    return;
  }
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderBody(activeHabbit);
};

/* work with days */
function addDays(form) {
  const data = validateAndGetFormData(form, ['comment']);
  if (!data) {
    return;
  }
  habbits = habbits.map(habbit => {
    if (habbit.id === globalActiveHabbitId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment: data.comment }])
      }
    }
    return habbit;
  });
}

function validateAndGetFormData(form, fields) {
  const formData = new FormData(form);
  const res = {};
  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove('error');
    if (!fieldValue) {
      form[field].classList.add('error');
    }
    res[field] = fieldValue;
  }
  let isValid = true;
  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
  return res;
}

function addDaysAndHabbit(event) {
  event.preventDefault();
  const form = event.target;
  if (form.classList.contains('habbit__form')) {
    addDays(form);
  } else {
    addHabbit(form);
  }
  form.reset();
  rerender(globalActiveHabbitId);
  saveData();
}

function deleteDay(i) {
  habbits = habbits.map(habbit => {
    if (habbit.id === globalActiveHabbitId) {
      habbit.days.splice(i, 1);
      return {
        ...habbit,
        days: habbit.days
      }
    }
    return habbit;
  });
  rerender(globalActiveHabbitId);
  saveData();
}

/* popup */
function togglePopup() {
  page.popup.classList.toggle('cover_hidden');
}

/* working with habbits */
function setIcon(context, icon) {
  page.iconField.value = icon;
  const activeIcon = document.querySelector('.icon.icon_active');
  activeIcon.classList.remove('icon_active');
  context.classList.add('icon_active');
}

function addHabbit(form) {
  const data = validateAndGetFormData(form, ['name', 'icon', 'target']);
  if (!data) {
    return;
  }
  // Получаем id так
  const id = habbits.length + 1;
  // Или вот так
  // const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0);
  const newHabbit = {
    id,
    icon: data.icon,
    name: data.name,
    target: data.target,
    days: []
  };
  habbits.push(newHabbit);
  togglePopup();
}

/* init */
(() => {
  loadData();
  rerender(habbits[0].id);
})();
