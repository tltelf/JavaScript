/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведите в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

// Данные
const payRateUSD = 80;
const workingDay  = 5;
const projectHours = 40;
const daysBeforeDeparture = 11;
const weekend = 2;

const timeLeft = daysBeforeDeparture - projectHours / workingDay - weekend;
console.log('Смогу ли я работать? ' + (daysBeforeDeparture > timeLeft));
const payment = projectHours * payRateUSD;
console.log('Стоимость работ: ' + payment + '$');