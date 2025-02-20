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
