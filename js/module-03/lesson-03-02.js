//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
//console.log(Array.isArray(0));
/*const findSmallerNumber = function(numbers){
    if(!Array.isArray(numbers)){
       return 'number is not Array'; 
    }
    let smallNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(smallNumber > numbers[i]){
            smallNumber = numbers[i];
        }
    }
    return smallNumber;
}

console.log(findSmallerNumber(0));*/

/*const findSmallerNumber = function(numbers){
    if(!Array.isArray(numbers)){
        return 'number is not Array';
    }
    let smallNumber = numbers[0];
    for(let number of numbers){
        if(typeof number !== 'number'){
            continue;
        }
        if(smallNumber > number){
            smallNumber = number;
        }
    }
    return smallNumber;
}
// .............................................................
console.log(findSmallerNumber([5,'-13',-7,-11,'a'])); */
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// const compareNumbers = function (a, b) {
//   return typeof a === "number" && typeof b === "number"
//     ? Math.min(a, b)
//     : "One of parameters is not a number";
// };
// ;..........................................................................  ВСЕМ ПРИВЕТ ........................................................
/*Потрібно перевітири чи є речення палінром*/

// const str = 'Я несу гусеня';
//янесугусеня
// const str = 'Де помити мопед';
// const str = 'І була пані на палубІ';
// const str = 'Поліна неси Ром!'
// const isPalindrom = function (str) {
//   const updateSring = str.toLowerCase().replaceAll(" ", "");
//   const array = [];
//   for (let i = 0; i < updateSring.length; i++) {
//     array.push(updateSring[updateSring.length - 1 - i]);
//   }
//   let reversedString = array.join("");
//   return updateSring === reversedString;
// };
// console.log(isPalindrom(str));
// .................................................................................
//напиши функцію функцію яка перевірить чи однакові масиви
//елементи з першого масива це елементи другого масива в квадраті
// const numbers = [11, 9, 3, 121, 33, 24, 20];
// const numbers2 = [121, 81, 9, 14641, 1089, 576, 576];

// function check(numbers, numbers2) {
//   const powNumbers = [];
//   if (numbers.length !== numbers2.length) {
//     return false;
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     powNumbers.push(numbers[i] * numbers[i]);
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     if (powNumbers[i] !== numbers2[i]) {
//       return false;
//     }
//   }
//   return true;
//   //   console.log(powNumbers);
// }
// function check(numbers, numbers2) {
//   if (numbers.length !== numbers2.length) {
//     return false;
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== Math.sqrt(numbers2[i])) {
//       return false;
//     }
//   }
//   return true;
//   //   console.log(powNumbers);
// }
// console.log(check(numbers, numbers2));
// ................................................................
