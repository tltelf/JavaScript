'use strict';

function getData(url, errorMessage) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${errorMessage} ${res.status}`);
    }
    return res.json();
  });
}

/* СТАЛО */

getData('https://dummyjson.com/products', 'Is error')
  .then(({ products }) => {
    console.log(products);
    return getData('https://dummyjson.com/products/' + products[0].id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const filter = document.querySelector('.filter');
    filter.innerHTML = error.message;
  });

/* БЫЛО */

fetch('https://dummyjson.com/productss')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Is error ${response.status}`);
    }
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Is error ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const filter = document.querySelector('.filter');
    filter.innerHTML = error.message;
  });
