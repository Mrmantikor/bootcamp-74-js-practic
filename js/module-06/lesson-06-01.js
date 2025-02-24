// Створити об'єкт, який представляє користувача.
//  У об'єкті повинні бути наступні поля: ім'я, прізвище,
//  вік, email та метод, який виводить
// повну інформацію про користувача.
// Для обьекта "user", написати метод для зміни ім'я або прізвища
// (змінити можна лише якесь з цих полів, змінювати або додавати нові
//потрібно заборонити) з перевіркою на валідність даних
// (Перша літера має бути у верхньому реєстрі,
//  довжина слова не менше 3 літер)
// const user = {
//     firstName: 'Poly',
//     lastName: 'Gaby',
//     age: 25,
//     email: 'gaby@gmail.com',
//     showUserInfo() {
//         console.log(`This is ${this.firstName} ${this.lastName}. age:${this.age} email${this.email}`);

//     },
//     modify(key, value) {
//         if (key !== 'firstName' && key !== 'lastName') {
//             console.log('This key cannot be changed❌');
//             return
//         }
//            if (!value.startsWith(value[0].toUpperCase()) || value.length < 3) {
//             console.log(`Value its not valid`);
//             return
//         }
//         // if (value[0].toUpperCase() !== value[0] || value.length < 3) {
//         //     console.log(`Value its not valid`);
//         //     return
//         // }
//       this[key]= value
//     }

// }
// user.modify('firstName', 'Mango');
// user.showUserInfo();

// ---------------------------------------------
// Створити глобальну функцію addProperty   для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість з переданим значенням

// user.addProperty('friends', friends)
// user.addProperty('mood', 'happy');

// const friends = [
//   {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     email: 'marysmith@hotmail.com',
//   },
//   {
//     firstName: 'Alex',
//     lastName: 'Johnson',
//     age: 45,
//     email: 'alex.johnson@yahoo.com',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     age: 19,
//     email: 'emilydavis@gmail.com',
//   },
// ];

// const user = {
//   firstName: 'Poly',
//   lastName: 'Gaby',
//   age: 25,
//   email: 'gaby@gmail.com',
//   showUserInfo() {
//     console.log(`This is ${this.firstName} ${this.lastName}. age:${this.age} email${this.email}`);
//   },
//   modify(key, value) {
//     if (key !== 'firstName' && key !== 'lastName') {
//       console.log('This key cannot be changed❌');
//       return;
//     }
//     if (!value.startsWith(value[0].toUpperCase()) || value.length < 3) {
//       console.log(`Value its not valid`);
//       return;
//     }
//     // if (value[0].toUpperCase() !== value[0] || value.length < 3) {
//     //     console.log(`Value its not valid`);
//     //     return
//     // }
//     this[key] = value;
//   },
// };

// user.addProperty = addProperty;

// function addProperty(prop, value) {
//   this[prop] = value;
// }

// user.addProperty('friends', friends);
// user.addProperty('mood', 'happy');

// console.log(user);

// //  Викликати метод user.showUser() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// // ---------------------------------------------
// const obj = {
//   firstName: 'Bob',
//   lastName: 'Lasso',
//   age: 50,
//   email: 'BodLasso@gmail.com',
// };

// user.showUserInfo.call(obj);

// ---------------------------------------------
/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

const ladder = {
  step: 0,

  up() {
    this.step += 1;
    return this;
  },

  down() {
    this.step -= 1;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.up();

// ladder.showStep();

// ladder.down();

// ladder.showStep();

//Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити ланцюжком, наприклад так:
ladder.up().up().up().down().down().showStep().up().up().showStep();
