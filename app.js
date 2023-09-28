'use strict';

/* key 'text', value { text: 'sdfsdf' } */

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
  document.querySelector('.notification').classList.remove('notification_hidden');
  setLocalStorage(input);
}

function changeInput(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
}

function setLocalStorage(input) {
  const obj = { text: input };
  localStorage.setItem('text', JSON.stringify(obj));
};
