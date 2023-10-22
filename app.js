'use strict';

/*
	Сделать запрос на https://dummyjson.com/products/categories,
	получить список категорий и отобразить <select> выбора категорий.
*/

function createSelect(arrCategories) {
  const filter = document.querySelector('.filter');
  const select = document.createElement('select');
  filter.appendChild(select);
  arrCategories.map((category) => {
    const option = document.createElement('option');
    option.innerText = category;
    select.appendChild(option);
  });
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
    .then((response) => response.json())
    .then((data) => createSelect(data))
    .catch((error) => console.error(`Ошибка: ${error}`));
}

getCategories();

/* Второй способ 

function createSelect(array) {
	const el = document.querySelector('.filter');
	el.innerHTML = `<select>
		${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
	</select>`
}

function getCategories() {
	fetch('https://dummyjson.com/products/categories')
	.then(response => response.json())
	.then(data => createSelect(data))
	.catch(error => console.error(`Ошибка: ${error}`))
}

getCategories();

*/
