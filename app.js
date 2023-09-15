const score = [5, 10, 0, 15];

for (let i = 0; i < score.length; i++) {
  console.log('Раунд: ' + score[i]);
}

console.log('-----');

for (const [i, el] of score.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`);
}

const iterator = (el, i) => {
  console.log(`Раунд ${i + 1}: ${el}`);
}

score.forEach(iterator);

score.forEach((el, i) => {
  console.log(`Раунд ${i + 1}: ${el}`);
})
// (5, 0) => { ... }
// (10, 1) => { ... }
