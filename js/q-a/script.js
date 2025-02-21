// У супермаркеті вишикувалась черга до кас самообслуговування. Напишіть функцію, яка обчислює загальний час, необхідний для того, щоб усі покупці змогли розрахуватись!
// Функція має дві вхідні змінні: customers: масив натуральних чисел, що представляє чергу. Кожне ціле число представляє клієнта, а його значення - це час, необхідний для того, щоб виїхати з магазину. n: натуральне число, кількість кас. Функція повинна повернути ціле число - загальний час, необхідний для цього.
// Існує лише ОДНА черга, порядок в черзі НІКОЛИ не змінюється.
// Припустимо, що перша людина в черзі (тобто перший елемент масиву) проходить до каси, як тільки вона звільняється.
// Отже, наприклад
// queueTime([5,3,4], 1)
// має повертати 12
// тому що при n=1 загальний час дорівнює сумі часів
// queueTime([10,2,3,3], 2)
// має повернути 10
// тому що тут n=2 і 2-га, 3-тя і 4-та людина в черзі
// закінчать раніше, ніж закінчить 1-а людина.
// queueTime([2,3,10], 2)
// має повернути 12

// console.log(new Array(2).fill(0));
// console.log([2, 0]);
// console.log([2, 3]);
// console.log([12, 3]);

// function queueTime(arrCustomers, quantityLines) {
//   const arrayLines = new Array(quantityLines).fill(0);

//   console.log(arrayLines);

//   arrCustomers.forEach(time => {
//     const indexOfSmallest = arrayLines.indexOf(Math.min(...arrayLines)); //[0, 0][2, 0] [2, 3]
//     arrayLines[indexOfSmallest] += time; // [2,3] [12, 3]
//   });

//   //   console.log(arrayLines);
//   return Math.max(...arrayLines); // [12, 3]
// }

// console.log(queueTime([2, 3, 10], 2));

// -------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length / 2; i += 1) {
//   let num1 = arr[i];
//   let num2 = arr[arr.length - 1 - i];

//   arr[i] = num2;
//   arr[arr.length - 1 - i] = num1;
// }

// console.log(arr);

// -------------------------------------------------------------
