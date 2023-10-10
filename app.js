'use strict';

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992
console.log(max + 3); // 9007199254740994
console.log(max + 4); // 9007199254740996

console.log(232345325235432352784390n); // 232345325235432352784390n
console.log(BigInt(232345325235432352784390)); // 232345325235432343994368n
console.log(BigInt('232345325235432352784390')); // 232345325235432352784390n

console.log(10n + 10n); // 20n
console.log(10n + BigInt(10)); // 20n
console.log(10n * 10n); // 100n

console.log(232345325235432352784390n * 232345325235432352784390n);
// 53984350158758838101835891691093469785827672100n

console.log(10n * BigInt(10)); // 100n
console.log(10 / 3); // 3.3333333333333335
console.log(10n / 3n); // 3n

console.log(10n < 20); // true
console.log(10n == 10); // true
console.log(10n === 10); // false
console.log(typeof 10n); // bigint
