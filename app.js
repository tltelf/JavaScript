'use strict';

const now = new Date();
console.log(now); // Wed Oct 11 2023 19:31:39 GMT+0400 (Самарское стандартное время)

console.log(new Date('02-01-2023')); // Wed Feb 01 2023 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date('02/01/2023')); // Wed Feb 01 2023 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date('2023/01/02')); // Mon Jan 02 2023 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date('10 Jan 2023')); // Tue Jan 10 2023 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date('10 янв 2023')); // Invalid Date
console.log(new Date('Wed Oct 11 2023 23:03:40')); // Wed Oct 11 2023 23:03:40 GMT+0400 (Самарское стандартное время)

console.log(new Date(2024, 10, 20)); // Wed Nov 20 2024 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date(2023, 11, 31)); // Sun Dec 31 2023 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date(1996, 11, 31, 19, 31, 0)); // Sun Dec 31 2023 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date(2023, 11, 52)); // Sun Jan 21 2024 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date(2023, 11, 52 + 78)); // Mon Apr 08 2024 00:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date(0)); // Thu Jan 01 1970 04:00:00 GMT+0400 (Самарское стандартное время)
console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 04:00:00 GMT+0400 (Самарское стандартное время)
console.log(Date.now()); // 1697051788994
console.log(new Date(Date.now())); // Wed Oct 11 2023 23:16:28 GMT+0400 (Самарское стандартное время)

console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 9
console.log(now.getDate()); // 11
console.log(now.getDay()); // 3
console.log(now.getHours()); // 23
console.log(now.getMinutes()); // 21
console.log(now.getTime()); // 1697052131268

console.log(now.setFullYear(2030)); // 1917976990753
console.log(new Date(now.setFullYear(2030))); // Fri Oct 11 2030 23:24:01 GMT+0400 (Самарское стандартное время)
console.log(new Date(now.setMonth(10))); // Mon Nov 11 2030 23:25:12 GMT+0400 (Самарское стандартное время)
