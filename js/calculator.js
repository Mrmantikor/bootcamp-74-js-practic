/*
Необхідно розробити інтерактивний калькулятор на JavaScript, який дозволяє користувачам виконувати базові математичні операції (додавання, віднімання, множення, ділення).
Калькулятор має підтримувати введення чисел, відображення поточного виразу, видалення введених символів і очищення всього дисплея.


* Обов'язковий функціонал:
Очищення всіх даних (AC).
Видалення останнього введеного символу (DEL).
Введення чисел (0-9) та десяткової крапки (.).
Вибір та виконання математичних операцій (+, -, *, ÷).
Обчислення виразу (=).
Форматування чисел при відображенні.
Динамічне оновлення інтерфейсу.

* 🛠 Технічні вимоги
Код реалізований об'єктно-орієнтованим способом через клас Calculator.
Інтерактивність реалізована через події (event listeners).
Використовується DOM-маніпуляція для оновлення UI.
Стилізація відбувається через CSS (відповідає переданій розмітці).

* Опис класу Calculator
class Calculator {
  constructor(calculatorGrid) {}
  clear() {}
  delete() {}
  appendNumber(number) {}
  chooseOperation(operation) {}
  compute() {}
  getDisplayNumber(number) {}
  updateDisplay() {}
  addEventListeners() {}
}

* Опис методів
 - constructor(calculatorGrid) Ініціалізує елементи калькулятора та додає обробники подій.
    ✔️ Знаходить всі необхідні DOM-елементи (числа, оператори, кнопки).
    ✔️ Викликає clear() для очищення дисплея.
    ✔️ Викликає addEventListeners() для додавання обробників подій.

 - clear()  Очищає всі значення калькулятора (скидає currentOperand, previousOperand, operation).
    ✔️ Видаляє всі введені дані (currentOperand, previousOperand).
    ✔️ Видаляє збережену операцію.

 - delete() Видаляє останній введений символ у currentOperand.
    ✔️ Видаляє останній символ у currentOperand.
    ✔️ Використовує .slice(0, -1), щоб відрізати останній символ.

 - appendNumber(number)  Додає введене число або десяткову крапку до currentOperand.
    ✔️ Додає число або десяткову крапку.
    ✔️ Якщо крапка (.) вже є – ігнорує другий ввід.

 - chooseOperation(operation)  Встановлює обрану математичну операцію (+, -, *, ÷).
    ✔️ Якщо немає числа – ігнорує операцію.
    ✔️ Якщо є previousOperand, виконує compute().
    ✔️ Очищає currentOperand для нового вводу.

 - compute()  Виконує обчислення поточного виразу (previousOperand operation currentOperand).
    ✔️ Перетворює previousOperand та currentOperand у числа.
    ✔️ Виконує математичну операцію відповідно до operation.
    ✔️ Зберігає результат у currentOperand.
    ✔️ Очищає operation і previousOperand.

 - getDisplayNumber(number)  Форматує число для красивого відображення (розділяє тисячі, додає десяткові знаки).

 - updateDisplay()  Оновлює дисплей калькулятора (currentOperand та previousOperand).
    ✔️ Форматує та відображає поточне число.
    ✔️ Якщо обрана операція – додає її у previousOperand.
    ✔️ В іншому випадку – очищує його.

 - addEventListeners()  Додає слухача подій (click) до калькулятора.
*/

const refs = {
  calcGrid: document.querySelector('.calculator-grid'),
};

class Calculator {
  constructor(calculatorGrid) {
    this.calculatorGrid = calculatorGrid;
    this.previousOperandTextEl = calculatorGrid.querySelector('[data-type="previous-operand"]');
    this.currentOperandTextEl = calculatorGrid.querySelector('[data-type="current-operand"]');

    this.clear();
    this.addEventListeners();
  }

  clear() {
    this.operation = null;
    this.currentOperand = '';
    this.previousOperand = '';
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
  appendNumber(number) {
    if (number === '.' && String(this.currentOperand).includes('.')) return;
    this.currentOperand += number;
  }
  chooseOperation(operation) {
    if (!this.currentOperand) return;

    if (this.previousOperand) {
      this.compute();
    }
    this.operation = operation;

    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
  compute() {
    let result = 0;
    const prev = Number.parseFloat(this.previousOperand);
    const current = Number.parseFloat(this.currentOperand);

    if (Number.isNaN(prev) || Number.isNaN(current)) return;

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = result;
    this.operation = null;
    this.previousOperand = '';
  }
  getDisplayNumber(number) {
    const strNumber = String(number);
    const [integer, decimal] = strNumber.split('.');

    const integerDigit = Number.parseFloat(integer);
    let formatedInteger = null;

    if (Number.isNaN(integerDigit)) {
      formatedInteger = '';
    } else {
      formatedInteger = integerDigit.toLocaleString('en', { minimumFractionDigits: 0 });
    }

    return decimal ? `${formatedInteger}.${decimal}` : formatedInteger;
  }

  updateDisplay() {
    this.currentOperandTextEl.textContent = this.getDisplayNumber(this.currentOperand);

    if (this.operation !== null) {
      this.previousOperandTextEl.textContent = `${this.getDisplayNumber(this.previousOperand)} ${
        this.operation
      }`;
    } else {
      this.previousOperandTextEl.textContent = '';
    }
  }
  addEventListeners() {
    this.calculatorGrid.addEventListener('click', e => {
      const { type } = e.target.dataset;

      if (!type) {
        return;
      }

      if (type === 'number') {
        this.appendNumber(e.target.innerText);
      } else if (type === 'delete') {
        this.delete();
      } else if (type === 'all-clear') {
        this.clear();
      } else if (type === 'operation') {
        this.chooseOperation(e.target.innerText);
      } else if (type === 'equals') {
        this.compute();
      }

      this.updateDisplay();
    });
  }
}

const calc = new Calculator(refs.calcGrid);
