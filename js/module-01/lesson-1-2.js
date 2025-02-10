//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log("a" < "b");
// console.log("a", "a".charCodeAt(0));
// console.log('b','b'.charCodeAt(0));
// console.log('A','A'.charCodeAt(0));
// console.log("b" < "a");
// console.log("A" < "a");
// console.log("a p p l e" < "a p p n anana");
// console.log("apple" > "yellow");
// console.log("bananana" < "apple");
// console.log(true < false);
// console.log(false < true);
//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 7);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не суворе рівенство (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined === null);

// console.log("123" === 123);
// console.log(true == "1");
// console.log(4 === 5 - true);

//* Суворе рівенство (===)
// console.log("123" === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);
//console.log(undefined === undefined);

//* Не дорівнює (!=)
// console.log('4' != 4);

//* Суворе не дорівнює (!==)
// console.log(NaN !== NaN);
// let string = "1,57px";
// string = string.replace(",", ".");
// console.log(Number.parseInt(string));

//let string = "1,58px";
//string = string.replace(',' , '.');
//console.log(Number.parseFloat(string))

// console.log(3 > 2 > 1);

// console.log(Math.PI);
// console.log(Math.pow(2, 5));
// console.log(Math.min(32, 4234, 23, 1, 0));
// console.log(Math.max(32, 4234, 23, 1, 0));
// console.log(Math.abs(-2));
// console.log(Math.abs(0));
// console.log(Math.abs(NaN));
// console.log(Math.abs("20"));
// console.log(Math.abs("asdsf"));

// function showName() {
//   console.log("Mango");
// }

// showName();

// const showName = function check(name, age) {
//   return `${name} is ${age} years old`;
// };
// console.log(showName("mango", 29));

// function showMinNumber(num1, num2, num3, num4) {
//   return Math.min(num1, num2, num3, num4);
// }

// console.log(showMinNumber(23, 56, 78));

// Оголоси дві змінні, які зберігають назву та ціну товару: productName і price. Присвоїти змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 10000.

// Напиши функцію, яка буде виводити повідомлення - 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'.

// Напиши функцію, яка буде перевизначати обраному товару, нову ціну. Функція повинна повертати повідомлення - 'Ціна змінена «MacBook Pro 13», нова ціна за штуку «new price» кредитів'.

// const productName = `MacBook Pro 13`;
// const price = 10000;

// function showProduct(productName, price) {
//   return `Обрано ${productName}, ціна за штуку ${price} кредитів`;
// }

// const message = showProduct(productName, price);
// console.log(message);

// const newPrice = function (productName, price) {
//   return `Ціна змінена «${productName}», нова ціна за штуку «${price} кредитів`;
// };
// console.log(newPrice(productName, 5000));

// ? Напиши функцію, яка буде перевіряти пароль у користувача. Запроси пароль у користувача через promt

// const userPassword = 'admin';
// const pass = prompt(`Enter your pass:`);
// function checkPass(pass) {
//   return pass === userPassword;
// }
// const isChecked = checkPass(pass);
// console.log(isChecked);showMinNumber
