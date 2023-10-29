'use strict';

const wrapper = document.querySelector('.wrapper');

for (let i = 1; i < 51; i++) {
  const el = document.createElement('div');
  el.innerHTML = `User id ${i}`;
  el.setAttribute('data-id', i);
  // el.addEventListener('click', () => {
  //   console.log(`Deleted user ${i}`);
  // })
  wrapper.append(el);
}

wrapper.addEventListener('click', (e) => {
  const i = e.target.getAttribute('data-id');
  console.log(`Deleted user ${i}`);
});
