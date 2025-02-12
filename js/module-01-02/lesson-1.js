//2. Напишіть програму, яка отримає
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
const namber = 70;
const hours = String(Math.floor(namber / 60)).padStart(2,0);
const minutes = String(namber % 60).padStart(2, 0);
console.log(`${hours}:${minutes}`)