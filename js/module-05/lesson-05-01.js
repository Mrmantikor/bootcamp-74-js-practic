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
