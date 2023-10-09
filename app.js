'use strict';

let a = { a: 1 };
let b = { b: 1 };
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map); // WeakMap {{…} => 'testA', {…} => 'testB'}
console.log(map.get(a)); // testA
console.log(map.has(a)); // true
// console.log(map.delete(a));
console.log(map); // WeakMap {{…} => 'testA', {…} => 'testB'}

a = null;
setTimeout(() => {
  console.log(map); // WeakMap {{…} => 'testB'}
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1;
    cache.set(obj, res);
  }
  return cache.get(obj);
}

const res = getValue(b);
console.log(res); // 1

const res2 = getValue(b);
console.log(res2); // 1
