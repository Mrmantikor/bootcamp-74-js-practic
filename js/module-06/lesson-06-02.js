/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

class Calculator {
  constructor() {
    this.result = 0;
  }
  #checkNumber(num) {
    return typeof num === 'number';
  }
  number(num) {
    const isValidNumber = this.#checkNumber(num);
    if (isValidNumber) {
      this.result = num;
    } else {
      console.log(`${num} is not valid number!`);
    }

    return this;
  }
  getResult() {
    console.log(this.result);
    return this;
  }
  add(num) {
    if (!this.#checkNumber(num)) {
      console.log(`${num} is not valid number!`);
      return this;
    }
    this.result += num;
    return this;
  }
  substruct(num) {
    const isValidNumber = this.#checkNumber(num);
    if (isValidNumber) {
      this.result -= num;
    } else {
      console.log(`${num} is not valid number!`);
    }
    return this;
  }
  divide(num) {
    const isValidNumber = this.#checkNumber(num);
    if (isValidNumber) {
      this.result /= num;
    } else {
      console.log(`${num} is not valid number!`);
    }
    return this;
  }
  multiply(num) {
    const isValidNumber = this.#checkNumber(num);
    if (isValidNumber) {
      this.result *= num;
    } else {
      console.log(`${num} is not valid number!`);
    }
    return this;
  }
}
const calculator = new Calculator();
// calculator.number(6);
// console.log(calculator.number(6));

// calculator.add(12);
// calculator.substruct(15);
// calculator.divide(2);
// calculator.multiply(100);
// calculator.getResult();
calculator
  .number('hi')
  .add(10)
  .divide(2)
  .multiply(4)
  .substruct(5)
  .getResult()
  .number(20)
  .substruct(40)
  .multiply(-8)
  .divide(160)
  .add(20)
  .getResult();
