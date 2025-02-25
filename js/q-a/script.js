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

const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

/*
1.Реалізувати фільтер за властивістю amount і отримати тільки назву моделі
*/
/*
const getAvailableCarNames = (cars, amountThreshold) => {
  return cars
    .filter(el => {
      return el.amount > amountThreshold;
    })
    .map(car => {
      return car.model;
    });
};

console.table(getAvailableCarNames(vehicles, 12));
*/
/* Неявне повернення
const getAvailableCarNames = (cars, amountThreshold) => {
  return cars.filter(el => el.amount > amountThreshold).map(car => car.model);
};

console.table(getAvailableCarNames(vehicles, 12));
*/

/*var-1
const getAvailableCarNames = (cars, amountThreshold) => {
  return cars.reduce((acc, el) => {
    if (el.amount > amountThreshold) {
      acc.push(el.model);
    }
    return acc;
  }, []);
};

console.table(getAvailableCarNames(vehicles, 12));
*/
/*var-2
const getAvailableCarNames = (cars, amountThreshold) => {
  return cars.reduce((acc, el) => {
    if (el.amount > amountThreshold) {
      //   acc.push(el.model);
      return [...acc, el.model];
    }
    return acc;
  }, []);
};

console.table(getAvailableCarNames(vehicles, 12));
*/

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars.reduce((acc, el) => (el.amount > amountThreshold ? [...acc, el.model] : acc), []);
// };

// console.table(getAvailableCarNames(vehicles, 12));

//2.Отримати машини на розпродажі і сортувати за спаданням ціни

// const getSortedCarsOnSale = cars => {
//   return cars.filter(item => item.onSale).toSorted((a, b) => b.price - a.price);
// };

// console.table(getSortedCarsOnSale(vehicles));

// const repeatCars = cars => {
//   return cars.reduce((acc, elem) => {
//     if (acc[elem.model]) {
//       acc[elem.model] += 1;
//     } else {
//       acc[elem.model] = 1;
//     }
//     return acc;
//   }, {});
// };

// const repeatCars = cars => {
//   return cars.reduce(
//     (acc, elem) => ({ ...acc, [elem.model]: acc[elem.model] ? acc[elem.model] + 1 : 1 }),
//     {}
//   );
// };
// console.log(repeatCars(vehicles));
//
