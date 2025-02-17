// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//     name: "Mango",
//     hobby: "reading",
//     age: 20,
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// };

// human.greet();

// human.mood = "happy";
// human["mood"] = "happy";
// const userMood = "mood";
// human[userMood] = "happy";
// human.hobby = "skydiving";
// human["hobby"] = "skydiving";
// const userHobby = "hobby";
// human[userHobby]= "skydiving";

// console.log(human);

// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true

const obj = {
    name: 'Igor',
    car: 'Mercedes',
    carColor: 'black',
  };

// const checkObj = function (obj, key){
//     const keys = Object.keys(obj);
//     for (const item of keys){
//         if (item === key){
//             return true;
//         }
//     }
//     return false;
// }  

// const checkObj = function (obj, key){
//     return Object.keys(obj).includes(key);
// }  

const checkObj = function (obj, key){
    return key in obj;
}  
console.log(checkObj(obj, "ca"));


