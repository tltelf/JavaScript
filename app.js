'use strict';

const b = 1;

const a = {
  b,
  getB: function () {
    return this.b;
  },
  getBAlt() {
    return this.b;
  }
}

console.log(a);                       // {b: 1, getB: ƒ, getBAlt: ƒ}
console.log(a.getB());                // 1
console.log(a.getBAlt());             // 1
