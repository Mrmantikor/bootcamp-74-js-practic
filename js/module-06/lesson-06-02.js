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

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.#checkEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log(`Your email is incorect`);
//     }
//   }
//   #checkEmail(newEmail) {
//     return newEmail.endsWith('@gmail.com') && newEmail.length > 13;
//   }

// }

// const mango = new User({ login: 'mango', email: 'mango@gmail.com' });

// mango.email = 'poly@gmail.com';
// console.log(mango.email);

/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */
// class Notes{
//   static priorityriority(){
//     return {
//       LOW: 'low',
//       HIGHT: 'hight',
//     }
//   }
//   constructor(){
//     this.items = [];
//   }
//   addNote(note){
//     this.items.push(note);
//   }
//   removeNote(text){
//     this.items = this.items.filter(el => (el.text !== text));
//   }
//   updatePriority(text, newPriority){
//     this.items = this.items.map(el => el.text === text ? {...el, priority: newPriority} : el)
//   }
// }

// const note = new Notes();
// note.addNote({text: 'Hello', priority: Notes.priority().LOW })
// note.addNote({text: 'Hi', priority: Notes.priority().HIGHT })
// note.addNote({text: 'Good day', priority: Notes.priority().LOW })
// note.removeNote('Hi');
// note.updatePriority('Hello', Notes.priority().HIGHT)

// console.log(note);

/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? email - email
? age - вік, число
? numberOfPosts - кількість постів, число
? topics - масив тем на яких спеціалізується блогер
? Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
? Добав метод getInfo(),який, повертає рядок: Blogger ${email} is ${вік} years old and has ${кількість постів} posts.
? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які п
отрібно додати користувачеві.
? Додай можливість додавати, видаляти, змінювати пости блогера. 
Один пост це об'єкт з полями text, data, head, id
*/

class Blogger {
  #topics;
  constructor({ email, age, numbeOfPosts, topics = [] }) {
    this.email = email;
    this.age = age;
    this.numbeOfPosts = numbeOfPosts;
    this.#topics = topics;
  }
  getInfo() {
    console.log(
      `Blogger ${this.email} is ${this.age} years old and has ${this.numbeOfPosts} posts.`
    );
  }
  updatePostCount(value) {
    this.numbeOfPosts += value;
  }
  createPost(post) {
    this.#topics.push(post);
  }
  get topics() {
    return this.#topics;
  }
  getTopicById(id) {
    return this.#topics.find(topic => topic.id === id);
  }
  topicUpdate(newTopic) {
    if (!newTopic.id) return;
    this.#topics = this.#topics.map(topic =>
      topic.id === newTopic.id ? { ...topic, ...newTopic } : topic
    );
  }
  removeTopic(id) {
    this.#topics = this.#topics.filter(topic => topic.id !== id);
  }
}
const newBlogger = new Blogger({
  email: 'blog@gmail.com',
  age: 23,
  numbeOfPosts: 45,
});
newBlogger.getInfo();
newBlogger.updatePostCount(4);

newBlogger.createPost({ text: 'dhgfdjsfguew', data: '12.02.2025', head: 'Sport', id: 1 });
newBlogger.createPost({ text: 'dhgfdjsfguew', data: '12.02.2025', head: 'Life', id: 3 });
newBlogger.createPost({ text: 'dhgfdjsfguew', data: '12.02.2025', head: 'Food', id: 4 });
// console.log(newBlogger);
// console.log(newBlogger.topics);
console.log(newBlogger.getTopicById(3));
console.log(newBlogger.topicUpdate({ id: 1, text: 'jhfkjsg' }));
newBlogger.removeTopic(1);
console.log(newBlogger);
