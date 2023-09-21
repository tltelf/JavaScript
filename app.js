const cities = {
  msk: {
    temp: {
      celcius: 25
    }
  },
  spb: {

  }
}

if (cities.spb && cities.spb.temp) {
  console.log(cities.spb.temp.celcius);
}

console.log(cities.msk.temp.celcius);       // 25
console.log(cities.spb?.temp?.celcius);     // undefined
