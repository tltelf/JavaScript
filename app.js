'use strict';

/*
	Сделать генератор 3х идей от скуки
	https://www.boredapi.com/api/activity
	с отображением на странице
*/

const container = document.querySelector('.container');

async function getIdia() {
  const idia = await fetch('https://www.boredapi.com/api/activity');
  return idia.json();
}

async function getIdias() {
  try {
    const idias = await Promise.all([getIdia(), getIdia(), getIdia()]);
    renderIdias(idias);
  } catch (e) {
    console.error(e);
  }
}

function renderIdias(arrayIdias) {
  const activity = document.querySelectorAll('.activity');
  arrayIdias.map((idia) => {
    if (activity.length < 3) {
      createActivity(idia);
    }
    activity.forEach((activ) => {
      activ.innerText = idia.activity;
    });
  });
}

function createActivity(idia) {
  const idiaDiv = document.createElement('div');
  container.appendChild(idiaDiv);
  idiaDiv.classList.add('activity');
  idiaDiv.innerText = idia.activity;
}

/*

const wrapper = document.querySelector('.wrapper');

async function getActivity() {
	const res = await fetch('https://www.boredapi.com/api/activity');
	return res.json();
}

async function generate() {
	try {
		wrapper.innerHTML = '';
		const data = await Promise.all([
			getActivity(),
			getActivity(),
			getActivity(),
		]);
		console.log(data);
		for (const el of data) {
			const element = document.createElement('div');
			element.innerHTML = `${el.activity}`;
			wrapper.appendChild(element);
		}
	} catch(e) {
		console.error(e);
	}
}

*/
