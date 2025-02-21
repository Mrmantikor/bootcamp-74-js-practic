// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного
// елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const array = [1, 2, 3, 4, 5];
// const newArray = array.map(el => el**2);
// console.log(newArray)

// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}.
// Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [2, 5, 6] },
    { id: 3, values: [7, 8, 5] },
];

// const newValues = data.flatMap(el => el.values)
//     .filter((el, index, array) => index === array.indexOf(el))

// const newValues = data.flatMap(el => el.values)
//     .reduce((previousValue, el) => {
//         if (!previousValue.includes(el)){
//             previousValue.push(el);
//         }
//         return previousValue;
//     }, [])

const newValues = data.flatMap(el => el.values)
    .reduce((previousValue, el) => previousValue.includes(el) ? previousValue : [...previousValue, el], [])

console.log(newValues)