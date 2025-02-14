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

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12];

// function sumNeighbors(array) {
//   const sum = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     console.log("first", array[i]);
//     console.log("second", array[i + 1]);
//     console.log("---");
//     sum.push(array[i] + array[i + 1]);
//   }
//   return sum;
// }

// console.log(sumNeighbors(someArr));

// const someArr = [22, 11, 34, 5, 12];

// function sumNeighbors(array) {
//   const sum = [];
//   for (let i = 0; i < array.length; i += 2) {
//     console.log("first", array[i]);
//     console.log("second", array[i + 1] || 0);
//     console.log("---");
//     sum.push(array[i] + (array[i + 1] || 0));
//   }
//   return sum;
// }

// console.log(sumNeighbors(someArr));




/* 
TODO: 
Напишіть функцію calculateAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Додати перевірку, що аргументи це числа.

function calculateAverage() {
    
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        if ('number' === typeof arguments[i]) {
            sum += arguments[i];  count++;
        }
    }
    console.log(sum/count);
}
console.log(calculateAverage('str', 1 , 2, 3, 4, 5, 6, 7));
*/

// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
const wordsArray = ["JavaScript", "HTML", "CSS"];
const item = "SS";

// function foundElement(array, item) {
//     let includes = false;
//     for (let i = 0; i < array.length; i++) {
//       console.log(array);
//         if (array[i] === item) {
//             array.splice(i, 1);
//             includes = true;
//         }
//   }
//     if (includes === false) {
//         array.push(item);
//     }
//     return array;
// }

function foundElement(array, item) {
    const index = array.indexOf(item)
    if (index === -1) {
        array.push(item)
    } else {
        array.splice(index, 1);
    }
    return array;
}

console.log(foundElement(wordsArray, item));

