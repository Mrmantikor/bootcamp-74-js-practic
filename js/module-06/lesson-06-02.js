/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }
//   #checkNumber(num) {
//     return typeof num === 'number';
//   }
//   number(num) {
//     const isValidNumber = this.#checkNumber(num);
//     if (isValidNumber) {
//       this.result = num;
//     } else {
//       console.log(`${num} is not valid number!`);
//     }

//     return this;
//   }
//   getResult() {
//     console.log(this.result);
//     return this;
//   }
//   add(num) {
//     if (!this.#checkNumber(num)) {
//       console.log(`${num} is not valid number!`);
//       return this;
//     }
//     this.result += num;
//     return this;
//   }
//   substruct(num) {
//     const isValidNumber = this.#checkNumber(num);
//     if (isValidNumber) {
//       this.result -= num;
//     } else {
//       console.log(`${num} is not valid number!`);
//     }
//     return this;
//   }
//   divide(num) {
//     const isValidNumber = this.#checkNumber(num);
//     if (isValidNumber) {
//       this.result /= num;
//     } else {
//       console.log(`${num} is not valid number!`);
//     }
//     return this;
//   }
//   multiply(num) {
//     const isValidNumber = this.#checkNumber(num);
//     if (isValidNumber) {
//       this.result *= num;
//     } else {
//       console.log(`${num} is not valid number!`);
//     }
//     return this;
//   }
// }
// const calculator = new Calculator();
// // calculator.number(6);
// // console.log(calculator.number(6));

// // calculator.add(12);
// // calculator.substruct(15);
// // calculator.divide(2);
// // calculator.multiply(100);
// // calculator.getResult();
// calculator
//   .number('hi')
//   .add(10)
//   .divide(2)
//   .multiply(4)
//   .substruct(5)
//   .getResult()
//   .number(20)
//   .substruct(40)
//   .multiply(-8)
//   .divide(160)
//   .add(20)
//   .getResult();


/*
? Напиши клас Storage, який створює об'єкти для управління складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
? Додай методи класу:
? getItems() – повертає масив товарів.
? addItem(item) - отримує новий товар та додає його до поточних.
? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
*/

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     this.items = this.items.filter(el => el !== item)
//   }
// }

// const stor1 = new Storage(['🍎', '🍋', '🍇', '🍑']);


// stor1.addItem('🍌');
// stor1.removeItem('🍋');
// console.log(stor1.getItems());;


/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.
*/

class User {
  #login;
  #email;
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    if (this.#checkEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log(`Your email is incorect`);
    }
  }
  #checkEmail(newEmail) {
    return newEmail.endsWith('@gmail.com') && newEmail.length > 13;
  }
  
}

const mango = new User({ login: 'mango', email: 'mango@gmail.com' });

mango.email = 'poly@gmail.com';
console.log(mango.email);
