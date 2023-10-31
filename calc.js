'use strict';

export function add(f, s) {
  return f + s;
}

export function sub(f, s) {
  return f - s;
}

console.log('d');

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products');
  return res.json();
}

export const res = await getProducts();
