// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного
// елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const array = [1, 2, 3, 4, 5];
// const newArray = array.map(el => el**2);
// console.log(newArray)

// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}.
// Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [2, 5, 6] },
//     { id: 3, values: [7, 8, 5] },
// ];

// const newValues = data.flatMap(el => el.values)
//     .filter((el, index, array) => index === array.indexOf(el))

// const newValues = data.flatMap(el => el.values)
//     .reduce((previousValue, el) => {
//         if (!previousValue.includes(el)){
//             previousValue.push(el);
//         }
//         return previousValue;
//     }, [])

// const newValues = data.flatMap(el => el.values)
//     .reduce((previousValue, el) => previousValue.includes(el) ? previousValue : [...previousValue, el], [])

// console.log(newValues)

// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
//   ];

//   const findElement = people.some(el => el.age < 20);
//   console.log(findElement);

// const findElement = people.find(el => el.age <20);
// console.log(findElement? true : false);

// const findElement = people.filter(el => el.age < 20);
// console.log(findElement.length !==0);
// console.log(Boolean(findElement.length));

const people = [
    {
      name: 'Alex',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
    {
      name: 'Jhon',
      know: [],
    },
  ];
  //нарцис  'Jhon'
  
  const people2 = [
    {
      name: 'Alex',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: [],
    },
    {
      name: 'Eva',
      know: [],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //немає нарциса'
  const people3 = [
    {
      name: 'Alex',
      know: ['Alex', 'Eva'],
    },
    {
      name: 'Jhon',
      know: [],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //немає нарциса
  
  const people4 = [
    {
      name: 'Alex',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: ['Eva'],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //немає нарциса'
  //Нарциса знають всі, нарцис незнає нікого

function findNar(array) {

    const narzis = array.find(el => el.know.length === 0);

    if (!narzis) {
        return `немає нарциса`;
    }
   
    const allKnow = array.every(el => {
        if (el.name === narzis.name) return true;
        return el.know.includes(narzis.name);
    });
    return allKnow ? `Нарицис ${narzis.name}`: `Немає нарциса`;
}

console.log(findNar(people));

  