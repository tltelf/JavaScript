'use strict';

const button = document.querySelector('.button');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function (event) {
  console.log('button');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = 'purple';
});

inner.addEventListener('click', function (event) {
  console.log('inner');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = 'grey';
  // event.stopPropagation();
});

wrapper.addEventListener('click', function (event) {
  console.log('wrapper');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.backgroundColor = 'antiquewhite';
});

wrapper.addEventListener(
  'click',
  function (event) {
    console.log('wrapper');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'antiquewhite';
  },
  true
);
