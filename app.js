/* Замаскировать всё, кроме последних 4х символов */
const card = '2342834503458353';
/* ************8353 */

console.log(card.slice(12).padStart(16, '*'));
console.log(card.slice(-4).padStart(16, '*'));
