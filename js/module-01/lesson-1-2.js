//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('a','a'.charCodeAt(0));
// console.log('b','b'.charCodeAt(0));
// console.log('A','A'.charCodeAt(0));
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('a p p l e' < 'a p p n anana');
// console.log('apple' > 'yellow');
// console.log('bananana' < 'apple');
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

// console.log('123' === 123);
// console.log(true == '1');
// console.log(4 === 5 - true);

//* Суворе рівенство (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);
//console.log(undefined === undefined);

//* Не дорівнює (!=)
// console.log('4' != 4);

//* Суворе не дорівнює (!==)
//console.log(NaN !== NaN);

//let string = "1,58px";
//string = string.replace(',' , '.');
//console.log(Number.parseFloat(string))

//console.log(3 > 2 > 1);

// console.log(Math.PI);
// console.log(Math.pow(2, 5));
// console.log(Math.min(32, 4234, 23, 1, 0));
// console.log(Math.max(32, 4234, 23, 1, 0));
// console.log(Math.abs(-2));
// console.log(Math.abs(0));
// console.log(Math.abs(NaN));
// console.log(Math.abs('20'));
// console.log(Math.abs("asdsf"));

// function showName() {
//    console.log('Mango');
// }

// showName();

// const showName = function (name, age) {
//   return `${name} is ${age} years old`;
// };
// console.log(showName("mango", 29));

function showMinNumber(num1, num2, num3, num4) {
  return Math.min(num1, num2, num3, num4);
}

console.log(showMinNumber(23, 56, 78));
