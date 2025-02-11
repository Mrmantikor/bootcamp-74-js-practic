// ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'. Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
// ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
// const languages = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";
// function fineSubString(string, subString) {
//   if (string.includes(subString)) {
//     return string.indexOf(subString);
//   }
//   return "Not found";
// }

// console.log(fineSubString(languages, "JS"));

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = "24px";

// const result = str.startsWith("2");
// console.log(result);

// ?  У нас є рядок: 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
// ? Замініть усі входження dog на monkey.
// const str =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
// console.log(str.replace("The", "On"));
// console.log(str.replaceAll("dog", "monkey"));

/*Потрібно перевітири чи є речення палінром*/

//  const str = 'Я несу гусеня';
//янесугусеня
// const str = 'Де помити мопед';
// const str = 'І була пані на палубІ';
// const str = 'Поліна неси Ром!';

// function isPalindrom(string){
//   const newStr = string.replaceAll(" ", "").toLowerCase();
//   let reversedString = "";
//   for (let i=0; i<newStr.length; i++){
//     reversedString += newStr[newStr.length-1-i];
//   }
//   console.log(newStr);
//   console.log(reversedString);
//   return newStr === reversedString;
// }
//  console.log(isPalindrom(str));

// function isPalindrom(string){
//   const newStr = string.replaceAll(" ", "").toLowerCase();
//   let reversedString = "";
//   for (let i=newStr.length-1; i>=0; i--){
//     reversedString += newStr[i];
//   }
//   console.log(newStr);
//   console.log(reversedString);
//   return newStr === reversedString;
// }
//  console.log(isPalindrom(str));

// function isPalindrom(string){
//   const newStr = string.replaceAll(" ", "").toLowerCase();
//  for (let i=0; i<Math.floor(newStr.length/2); i++){
//   if (newStr[i] !== newStr[newStr.length-1-i]){
//     return false;
//   }
//   // console.log(i);
//   // console.log(newStr.length-1-i);
//   // console.log('-------');
//  }
//   return true;
// }
//  console.log(isPalindrom(str));

// Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****

// let str='*';
// while(str.length<8){
//   console.log(str);
//   str+='*';
// }
// let str='*';
// do{
//   console.log(str);
//   str+='*';
// }
// while(str.length<8);
// let str='*';
// for(let i=0; i<7; i++){
//   console.log(str);
//   str+='*';
// }

// Порахуйте суму чисел від 12 до 27
// const num1 = 12;
// const num2 = 27;
// let sum = 0;
// // for(let i=num1; i<num2; i++){
// //   if (i%2!==0){
// //     sum+=i;
// //   }
// // }
// for (let i = num1; i < num2; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// let drink = prompt("Що бажаєте?")?.toLowerCase();
// // if (typeof drink === "string") {
// //   drink = drink.toLowerCase();
// // }

// let price = 0;

// switch (drink) {
//   case "кава":
//     price = 1;
//     break;
//   case "чай":
//     price = 2;
//     break;
//   case "сік":
//     price = 3;
//     break;
//   default:
//     "Що це?";
// }
// console.log(price);

/*
Опис:
Тіммі та Сара думають, що вони закохані, але в тому місці, де вони живуть, вони дізнаються лише тоді, коли зірвуть по одній квітці. Якщо одна з квіток має парну кількість пелюсток, а інша - непарну, то це означає, що вони закохані.

Напишіть функцію, яка отримує кількість пелюсток кожної квітки і повертає true, якщо вони закохані, і false, якщо ні.
*/

// function checkLove(flower1, flower2) {
//   // if (
//   //   (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//   //   (flower1 % 2 !== 0 && flower2 % 2 === 0)
//   // ) {
//   //   return true;
//   // }
//   // return false;
//   return flower1 % 2 !== flower2 % 2;
// }

// console.log(checkLove(2, 3));
