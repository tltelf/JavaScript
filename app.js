'use strict';

/*
	Получить геолокацию пользователя через
	Geolocation.getCurrentPosition() (WEB API)
	и по координатам определить город, отправив запрос:
	https://api.bigdatacloud.net/data/reverse-geocode-client?
	latitude=00&longitude=00
*/

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log(coords);
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const dataResponse = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (!dataResponse.ok) {
      throw new Error(dataResponse.status);
    }
    const { city } = await dataResponse.json();
    console.log(city);
  } catch (e) {
    console.log(e);
  }
}

getMyCity();

async function getPosition() {
  let latitude;
  let longitude;

  navigator.geolocation.getCurrentPosition(({ coords }) => {
    console.log(coords);
    latitude = coords.latitude;
    longitude = coords.longitude;
  });

  const dataResponse = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  const { city } = await dataResponse.json();

  return city;
}

getPosition().then((data) => console.log(data));
