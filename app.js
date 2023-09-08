/*
	Вася положил 12 000$ на вклад 7% годовых с
	капитализацией 1 раз в месяц.
	Вывести в консоль, сможет ли он купить дом за 13 500$
	через 2 года после снятия вклада. И остаток после покупки.
	Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const depositUSD = 12000;
const capitalization = 0.07;
const periodInMonths = 24;
const houseCost = 13500;

const res = depositUSD * (1 + capitalization / 12) ** 24;
if (res > houseCost) {
  console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
  console.log(`Мы накопили: ${res}. Купить не сможем`);
}