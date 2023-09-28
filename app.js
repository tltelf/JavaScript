'use strict';

const obj = JSON.parse('{ "a": 1 }');
console.log(obj);                             // {a: 1}
console.log(obj.a);                           // 1
const str = JSON.stringify(obj);
console.log(str);                             // '{"a":1}'
