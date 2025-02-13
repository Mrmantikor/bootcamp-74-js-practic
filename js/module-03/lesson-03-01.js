// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джас", "Блюз"];

// styles.push("Рок-н-рол");

// const index = styles.indexOf("Блюз");

// // styles[index] = "Класика";

// const deleteElement = styles.shift();

// styles.unshift("«Реп»", "Реггі");

// console.log(styles);

/*
Створити функцію multiples(m, n), яка повертає масив перших m кратних дійсного числа n. Вважати, що m - натуральне число.

Наприклад.
multiples(3, 5) повинна повернути [5, 10, 15]
*/

// function multiples(m, n) {
//   const arr = [];
//   let startNum = n;

//   for (let i = 0; i < m; i += 1) {
//     arr.push(startNum);

//     startNum += n;
//   }

//   return arr;
// }

// option 2
// function multiples(m, n) {
//   const arr = [];

//   for (let i = 1; i <= m; i += 1) {
//     arr.push(n * i);
//   }

//   return arr;
// }

// // multiples(3, 5);
// console.log(multiples(4, 4));

//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for і for..of.

// const str = "HTML, JavaScript, CSS, React";
// const array = str.split(",");
// console.log(array);

// for (let index = 0; index < array.length; index++) {
//   const word = array[index];
//   console.log(word);
// }

// for (const element of array) {
//   console.log(element);
// }
// let longestWord = array[0];

// for (let index = 1; index < array.length; index++) {
//   const word = array[index];
//   if (longestWord.length < array[index].length) {
//     longestWord = array[index];
//   }
// }
// console.log(longestWord);

// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.

// const message = 'JavaScript is a popular programming language.';
// const newMessage = message.split(' ').join('-').toLowerCase();
// console.log(newMessage);
// const arrayLength = message.split(' ').length;
// console.log(arrayLength);

//Напишіть скрипт, який замінює регістр кожного символу
//в стороні на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// const str = 'JavaScript'
// let updateString = ''

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] === str[i].toUpperCase()) {
// 		updateString += str[i].toLowerCase()
// 	} else {
// 		updateString += str[i].toUpperCase()
// 	}
// }
// console.log(updateString)

// const array = str.split('')
// const updateArray = []
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === array[i].toUpperCase()) {
// 		updateArray.push(array[i].toLowerCase())
// 	} else {
// 		updateArray.push(array[i].toUpperCase())
// 	}
// }
// console.log(updateArray.join(''))

// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React']
// const substring = 'S'
// const array = []

// for (const str of wordsArray) {
// 	if (str.includes(substring)) {
// 		array.push(str)
// 	}
// }
// console.log(array)
