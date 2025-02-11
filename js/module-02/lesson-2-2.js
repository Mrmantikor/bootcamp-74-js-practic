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

 const str = 'Я несу гусеня!';
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

function isPalindrom(string){
  const newStr = string.replaceAll(" ", "").toLowerCase();
  let reversedString = "";
  for (let i=newStr.length-1; i>=0; i--){
    reversedString += newStr[i];
  }
  console.log(newStr);
  console.log(reversedString);
  return newStr === reversedString;
}
 console.log(isPalindrom(str));
