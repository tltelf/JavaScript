'use strict';

/* 
	Сделать функицю пользовтеля, которая берёт за основу
	userInfo и за счёт замыкания создаёт новый объект, с
	которым можно работать как user1().increse(100)
*/

const userInfo = {
	balance: 0,
	operations: 0,
	increse(sum) {
		this.balance +=sum;
		this.operations++;
	}
}

function getUser() {
  const user = Object.assign({}, userInfo);
  return function() {
    return user;
  }
};

// function getUser() {
// 	const userObj = {
// 		balance: 0,
// 		operations: 0,
// 		increse(sum) {
// 			this.balance +=sum;
// 			this.operations++;
// 		}
// 	};
// 	return function() {
// 		return userObj;
// 	}
// };

const user1 = getUser();
user1().increse(100);
user1().increse(300);
user1().increse(-50);
console.log(user1());

const user2 = getUser();
user2().increse(100);
console.log(user2());
