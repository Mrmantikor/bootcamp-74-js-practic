//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log((true && 0) || "kiwi");
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) >= 0);
// console.log(null || (2 && 3) || 4);

//? Перетворення типів
// console.log(2 + 5 + "" + 1 + 0);
// console.log("" + 1 - 0);
// console.log(true + false);
// console.log(6 / Number.parseInt("3px"));
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("" + 1);
// console.log(3 > 2 > 1);
// console.log(3 > 2 && 2 > 1);
////////////////////////////////////////////////////////////////

// const str = 'abcdea';
// if (str.indexOf("a") === 0) {
//     console.log("так");
// }
// else{
//     console.log("ні");
// }
// 4 variant
// const message = str[0]==="a" ? "так":"Hi";
// console.log(message);
// 3 variant
// const message = str.startsWith("a") ? "так":"Hi";
// console.log(message);

// 2 variant
// str.startsWith("a") ? console.log("так") : console.log("ні");
// 1 variant
// if (str.startsWith("a")){
//     console.log("так");
// }
// else {
//     console.log("ні");
// }

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const firstName = "Bobys";
const lastName = "Marleys";
// if (firstName.length > 4 && lastName.length > 5) {
//    console.log(firstName.length + lastName.length)
// }
// else {
//     console.log('неможливо виконати умову')
//     }
// const resolt =
//   firstName.length > 4 && lastName.length > 5
//     ? firstName.length + lastName.length
//     : "неможливо виконати умову";
// console.log(resolt);
// function checkNameLength(firstName, lastName) {
//   return firstName.length > 4 && lastName.length > 5
//     ? firstName.length + lastName.length
//     : "неможливо виконати умову";
// }
// const resolt = checkNameLength(firstName, lastName);
// console.log(resolt);
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = prompt('Введіть вік Максима');

// if (ageMaxim >= 0 && ageMaxim <= 16) {
// console.log('Діти');
// }

// else if (ageMaxim >= 17 && ageMaxim <= 60) {
//   console.log('Дорослі');
// }

// else if (ageMaxim >= 61 && ageMaxim <= 100) {
//   console.log(Пенсіонери);
// }
// else {
//   console.log('Жодна з груп');
// }
 

// function checkAgeMaksim(age) {
//   switch (age) {
//     case age >= 0 && age <= 16 && age :
//       console.log('Діти');
//       break;
//     case age >= 17 && age <= 60 && age:
//       console.log('Дорослі');
//       break;
//     case age >= 61 && age <= 100 && age:
//       console.log('Пенсіонери');
//       break;
//     default:
//       console.log('Жодна з груп');
//       break;
//   }

// }

// checkAgeMaksim(155);


// function checkAgeMaksim(age) {
//   return age >= 0 && age <= 16 ? 'Діти' :
//     age >= 17 && age <= 60 ? 'Дорослі' :
//       age >= 61 && age <= 100 ? 'Пенсіонери' :
//         'Жодна з груп'

// }

// console.log(checkAgeMaksim(17));