function canAccessWebsite(age) {
  if (age < 18) {
    return 'Да';
  }
  return 'Нет';
}

console.log(canAccessWebsite(17));

const canAccessWebsite2 = age => age < 18 ? 'Да' : 'Нет';
const canAccessWebsite3 = age => age < 18;

console.log(canAccessWebsite2(17));
console.log(canAccessWebsite3(17));