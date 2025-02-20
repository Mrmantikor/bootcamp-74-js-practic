/*
Напишіть дві функції
letMeSeeYourName(callback) - запитує ім'я користувача
через prompt та викликає callback функцію
greet(name) - коллбек, що приймає ім'я і логірує в консоль
Рядок "Привіт <name>"
Реалізуй перевірку, що prompt не порожній

const letMeSeeYourName = (callback) => {
  const userName = prompt("Введіть своє імя");
  if (!userName) {
    console.log("Введіть своє імя");
    return;
  }
  callback(userName);
};

const showMassage = (name) => {
  console.log(`Привіт ${name}`);
};
letMeSeeYourName(showMassage);
*/
/*
Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
TODO: Явне повернення
const multiplyNumbers = (a, b, callback) => {
  callback(a * b);
};

const multiplyCallbeck = (number) => {
  if (number % 2 === 0) {
    console.log(number ** 2);
  } else {
    console.log(Math.sqrt(number));
  }
};

multiplyNumbers(10, 3, multiplyCallbeck);

TODO: Неявне повернення
const multiplyNumbers = (a, b, callback) => callback(a * b);

const multiplyCallbeck = (number) => {
  if (number % 2 === 0) {
    console.log(number ** 2);
  } else {
    console.log(Math.sqrt(number));
  }
};

multiplyNumbers(10, 3, multiplyCallbeck);
*/
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
// const makeProduct = (name, price, callback) => {
//   const id = Date.now();
//   const product = {
//     name,
//     price,
//     id,
//   };
//   callback(product);
// };
// const showProduct = (product) => {
//   console.log(product);
// };
// makeProduct("Mango", 29, showProduct);

//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
//! Використай анонімну колбєк функцію

// const numbers = [3, 5, 6, 34, 8, 83, 12, 34];
// const each = (array, callback) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// };
// const result = each(numbers, (number) => number * 2);
// console.log(result);

/*const numbers = [3, 5, 6, 34, 8, 83, 12, 34];
let sum = 0;
numbers.forEach((el, indx, array) => {
  
  if(el %2 === 0) {
    return;
  }
  sum += el;
})
console.log(sum);*/
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

/*const numbers = [1, 3, 6, 7, 9, 20];

const firstElement = (arrayFirst, callback) =>{
  for(let i = 0; i<= arrayFirst.length; i++){
    if(callback(arrayFirst[i]) === true){
      return arrayFirst[i];
    };
  }
  return null;
};

const findNumber = (number) =>{
  if(number %2 === 0 ){
    return true;
  }else false;
};

console.log(firstElement(numbers, findNumber));*/

//const numbers = [1, 3, 6, 7, 9, 20];
/*const words = ['apple', 'banana', 'orange', 'pear'];

const firstElement = (arrayFirst, callback) =>{
  for(let i = 0; i<= arrayFirst.length; i++){
    if(callback(arrayFirst[i])){
      return arrayFirst[i];
    };
  }
  return null;
};

const findNumber = (number) => number % 2 === 0;

const findLetterWithO = (string) => string.toLowerCase().startsWith('o');

console.log(firstElement(words, findLetterWithO));
/*console.log(firstElement(numbers, findNumber));
console.log(firstElement(words, findLetterWithO));*/

// { name: '🍎', price: 50 }
//  { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

// const numbers = [1, 3, 6, 7, 9, 20];

// const arr = numbers.map(el => {
//   if (el % 2 !== 0){
//     return el*=2;
//   } return el;
// }) 
// console.log(arr);

// const numbers = [1, 3, 6, 7, 9, 20];

// const arr = numbers.map(el => el % 2 !== 0 ? el*2 : el) 
// console.log(arr);

// const products = [
//   { name: '🍎', price: 50 },
//   { name: '🍇', price: 70 },
//   { name: '🍋', price: 60 },
//   { name: '🍓', price: 110 }
// ];

// const productsWithDiscount = products.map((el, indx) => {
//   const disc = (indx + 1)*10;
//   return {...el, discount: `${disc}%`, price: (el.price - (el.price / disc)).toFixed(2)};
// });
// console.log(productsWithDiscount);
