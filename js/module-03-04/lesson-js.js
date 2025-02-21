// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];

// const arr2 = [
//   { id: 2, name: 'Mary1' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// // const allArr = arr1.concat(arr2)

// const allArr = [...arr1, ...arr2]
// console.log(allArr);
// const newObj = {
// }

// for (const item of allArr) {
//   newObj[item.id] = item
// }

// const values = Object.values(newObj)
// console.log(values);

// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...keysForDelete) {
//   const newObj = {
//   }

// const keys = Object.keys(obj)
// for (const key of keys){
//   if (!keysForDelete.includes(key)) {
//     newObj[key] = obj[key]
//   }
// }

//   return newObj

// }

// console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));

// function updateObject(obj, ...keysForDelete) {
//   const newObj = {};

//   const keys = Object.keys(obj);

//   for (const key of [...keys]) {
//     if (keysForDelete.includes(key)) {
//       const index = keys.indexOf(key);
//       keys.splice(index, 1);
//     }
//   }

//   for (const key of keys) {
//     newObj[key] = obj[key];
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));

// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4.8 },
//   { name: "Ірина", surname: "Федорова", grade: 4.2 },
// ];
// // const findTopStudent = function (students) {
// //   let bestStudent = students[0];
// //   for (const student of students) {
// //     if (student.grade > bestStudent.grade) {
// //       bestStudent = student;
// //     }
// //   }
// //   return bestStudent;
// // };
// const findTopStudent = function (students) {
//   let grades = [];
//   for (const student of students) {
//     grades.push(student.grade);
//   }
//   const bestGrade = Math.max(...grades);
//   for (const item of students) {
//     if (item.grade === bestGrade) {
//       return item;
//     }
//   }
// };

// console.log(findTopStudent(students));


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

// function findNar(array) {
//     let narzis = "";
//     for (const user of array) {
//         if (user.know.length === 0) {
//             narzis += user.name;
//             break;
//         }
//     }
//     if (!narzis) {
//         return `немає нарциса`;
//     }
//     for (const whoKnow of array) {
//         if (whoKnow.name === narzis) {
//             continue;
//         }
//         if (!whoKnow.know.includes(narzis)) {
//             return `немає нарциса`
//         }
//     }
//     return `Нарицис ${narzis}`
// }

// console.log(findNar(people4));


// Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.


const books = [
  { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
  {
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    year: 1866,
  },
  {
    title: 'Гаррі Поттер і філософський камінь',
    author: 'Джоан Роулінг',
    year: 1997,
  },
  { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
  { title: '1984', author: 'Джордж Оруелл', year: 1949 },
];

function findBooksByAuthor(books, author) {
    const booksArray = [];
    for (const book of books) {
        if (book.author === author) {
            booksArray.push(book);
        }
    }
    return booksArray;
}
console.log(findBooksByAuthor(books, "Лев Толстой"));