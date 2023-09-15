function power(pow) {
  return function (num) {
    return num**pow;
  }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));         // 25
console.log(powerOfTwo(10));        // 100

const powerOfThree = power(3);
console.log(powerOfThree(5));       // 125

console.log(power(5)(4));           // 1024
