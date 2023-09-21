/* Релизовать методы увеличения и уменьшения баланса, 
	при котором каждая операция сохраняется в массив
	operations в виде { reason: 'Оплата налогов', sum: -100 }.
	Возвращается true, если успешно и false, если не хватает баланса
	Так же реализовать метод вывода числа операций по кошельку
 */

  const wallet = {
    balance: 0,
    operations: [],
    increase: function(reason, sum) {
      this.balance += sum;
      this.operations.push({
        reason: reason,
        sum: sum,
      })
      console.log(`Пополнение баланса на сумму: ${sum}. Причина: "${reason}"`);
      return true;
    },
    decrease: function(reason, sum) {
      if (this.balance < sum) {
        console.log(`Недостаточно средств. Ваш баланс: ${this.balance}. Сумма покупки: ${sum}`);
        return false;
      }
      this.balance -= sum;
      this.operations.push({
        reason: reason,
        sum: -sum,
      })
      console.log(`Покупка на сумму: ${sum} совершена успешно. Причина: "${reason}"`);
      return true;
    },
    getOperations: function() {
      console.log('Количество операций по балансу:');
      return this.operations.length;
    }
  };

  console.log(wallet.increase('Заработал', 10000));
  console.log(wallet.decrease('Заказал на МегаМаркете товары', 300));
  console.log(wallet.decrease('Купил телефон', 30000));
  console.log(wallet.decrease('Купил наушники', 5000));
  console.log(wallet.getOperations());
