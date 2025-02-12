//2. Напишіть програму, яка отримає
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const namber = 70;
// const hours = String(Math.floor(namber / 60)).padStart(2,0);
// const minutes = String(namber % 60).padStart(2, 0);
// console.log(`${hours}:${minutes}`)

// const languagesStr = "CSS, HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++";
// let uniqueLetters = "";

// for (let i = 0; i < languagesStr.length; i += 1) {
//   if (uniqueLetters.includes(languagesStr[i])) {
//     continue;
//   }
//   uniqueLetters += languagesStr[i];
// }
// for (let i = 0; i < languagesStr.length; i += 1) {
//   if (!uniqueLetters.includes(languagesStr[i])) {
//     uniqueLetters += languagesStr[i];
//   }
// }
// for (let i = 0; i < languagesStr.length; i += 1) {
//   if (i === languagesStr.indexOf(languagesStr[i])) {
//     uniqueLetters += languagesStr[i];
//   }
// }
// console.log(uniqueLetters);

/*
https://calculator888.ru/visokosnyy-god/
Напишіть програму яка буде виводити в консоль високосні роки в проміжку від  1700 до 2025
Рік, номер якого кратний 400, - високосний;
    інші роки, номер яких кратний 100, - невисокосні (наприклад, роки 1700, 1800, 1900, 2100, 2200, 2300);
    інші роки, номер яких кратний 4, - високосні
    всі інші роки - невисокосні.
    

for (let i = 1700; i <= 2025; i++) {
  if (i % 400 === 0) {
    console.log("високосний", i);
  }

  if (i % 100 !== 0 && i % 4 === 0) {
    console.log("високосний", i);
  }
}
*/

/*Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера
// Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
//Інакше виявити рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
//інакше виводити рядок "Невірний пароль!
*/
// const userLogin = prompt("Enter login!");

const userLogin = prompt("Enter login!");
let strAdmin = "Адмін";
if (userLogin === strAdmin) {
  const userPassword = prompt("Enter your password");
  if (userPassword === "Я головний") {
    console.log("Здрастуйте!");
  } else if (userLogin === null || userLogin === "") {
    console.log("Скасовано");
  } else {
    console.log("Невірний пароль!");
  }
} else if (userLogin === null || userLogin === "") {
  console.log("Скасовано");
} else {
  console.log("Я вас не знаю");
}
