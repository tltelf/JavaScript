/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber(number) {
  number = number.trim();
  number = number.replace('+7', '8');
  if (!number.startsWith('8')) {
    return false;
  }
  number = number.replaceAll('(', '');
  number = number.replaceAll(')', '');
  number = number.replaceAll(' ', '');
  number = number.replaceAll('-', '');
  if (number.length !== 11) {
    return false;
  }
  let onluNumber = true;
  for (const char of number) {
    if (isNaN(Number(char))) {
      onluNumber = false;
      break;
    }
  }
  return onluNumber;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));
