// // Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// // Послідовно:
// // 1 додати поле mood зі значенням 'happy'
// // 2 замінити hobby на 'skydiving'
//
// // const human = {
// //     name: "Mango",
// //     hobby: "reading",
// //     age: 20,
// //     greet(){
// //         console.log(`Hello ${this.name}`);
// //     }
// // };
//
// // human.greet();
//
// // human.mood = "happy";
// // human["mood"] = "happy";
// // const userMood = "mood";
// // human[userMood] = "happy";
// // human.hobby = "skydiving";
// // human["hobby"] = "skydiving";
// // const userHobby = "hobby";
// // human[userHobby]= "skydiving";
//
// // console.log(human);
//
// // Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// // Якщо об'єкт має такий ключ - поверне true
//
// const obj = {
//     name: 'Igor',
//     car: 'Mercedes',
//     carColor: 'black',
//   };
//
// // const checkObj = function (obj, key){
// //     const keys = Object.keys(obj);
// //     for (const item of keys){
// //         if (item === key){
// //             return true;
// //         }
// //     }
// //     return false;
// // }
//
// // const checkObj = function (obj, key){
// //     return Object.keys(obj).includes(key);
// // }
//
// const checkObj = function (obj, key){
//     return key in obj;
// }
// console.log(checkObj(obj, "ca"));
//
//const
// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Polwy:222 ,
// };
// let sum=0;
// const array=Object.entries(salaries);
// for (const arrayElement of array) {
//     sum+=arrayElement[1];
//
// }







// const keys= Object.keys(salaries);
// // console.log(keys);
// for (let i=0; i<keys.length; i++){
//
// // console.log(salaries[keys[i]]);
// sum+=salaries[keys[i]]
// }


// const values = Object.values(salaries);
// for (let i = 0; i < values.length; i++) {
//   sum += values[i];
// }


console.log (sum);




// let sum = 0;
// for (const salariesKey in salaries) {
//     sum+=salaries[salariesKey];
// }
// console.log(sum);


// let sum =salaries.Ajax + salaries.Mango + salaries.Poly ;
// console.log(sum|| 0);



// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0