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


function updateObject(obj, ...keysForDelete) {
  const newObj = {
  }

const keys = Object.keys(obj)
for (const key of keys){
  if (!keysForDelete.includes(key)) {
    newObj[key] = obj[key]
  }
}

  return newObj

}

console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'));