'use strict';

function generate(event) {
  console.log(event.target.getBoundingClientRect());

  console.log(`X scrollX: ${window.scrollX}`);
  console.log(`Y scrollY: ${window.scrollY}`);
  console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`clientHeight: ${document.documentElement.clientHeight}`);

  const el = document.querySelector('.down');
  const rect = el.getBoundingClientRect();

  window.scrollTo({
    left: window.scrollX + rect.left,
    top: window.scrollY + rect.top,
    behavior: 'smooth',
  });
}
