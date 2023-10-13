'use strict';

console.log(performance.now()); // 39.79999998211861
const mark1 = performance.now();

setTimeout(() => {
  const mark2 = performance.now();
  console.log(performance.now()); // 1049.0999999940395
  console.log(mark2 - mark1); // 1009.3000000119209
}, 1000);
