/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній,
 також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль.
  У разі, якщо користувач не виконав одну із умов, виведи повідомлення. 
  Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous".
   Якщо користувач ввів ім`я, а потім видалиv, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous".
   \ При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// const refs = {
//   input: document.querySelector('.js-username-input'),
//   form: document.querySelector('.js-contact-form'),
//   userName: document.querySelector('.js-username-output'),
// };

// const hadleInputValidation = function () {
//   // refs.userName.textContent = refs.input.value ? refs.input.value : 'Anonimous';
//   refs.userName.textContent = refs.input.value || 'Anonimous';
// };
// const handleSubmit = function (e) {
//   e.preventDefault();

//   const { accept, userName } = e.target.elements;
//   if (!userName.value || !accept.checked) {
//     alert('Not valid data');
//     return;
//   }
//   const userdata = { name: userName.value };
//   console.log(userdata);
//   refs.form.reset();
//   refs.userName.textContent = 'Anonimous';
// };

// refs.input.addEventListener('input', hadleInputValidation);
// refs.form.addEventListener('submit', handleSubmit);

// const handleInput = function (e) {
//   // refs.input.classList.add('error');
//   // if (e.target.value.length > 6) {
//   //   refs.input.classList.replace('error', 'success');
//   // } else {
//   //   refs.input.classList.replace('success', 'error');
//   // }
//   if (e.target.value.length > 6) {
//     refs.input.classList.add('success');
//     refs.input.classList.remove('error');
//   } else {
//     refs.input.classList.add('error');
//     refs.input.classList.remove('success');
//   }
// };
// // refs.input.addEventListener('input', handleInput);

// const handleBorderColor = function () {
//   if (!refs.input.value.length) {
//     refs.input.style.outline = '3px solid red';
//   } else {
//     refs.input.style.outline = '3px solid green';
//   }
// };
// // refs.input.addEventListener('focus', handleBorderColor);

// const handleBlurInput = function () {
//   if (!refs.input.value.length) {
//     refs.input.style.outline = '3px solid red';
//   } else {
//     refs.input.style.outline = '3px solid lime';
//   }
// };
// refs.input.addEventListener('blur', handleBlurInput);

// ------------------------------------------------------------

// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

// const refs = {
//   input: document.querySelector('.js-password-input'),
//   btn: document.querySelector('.js-password-button'),
// };

// refs.btn.addEventListener('click', e => {
//   if (refs.input.type === 'text') {
//     refs.input.type = 'password';
//     e.target.textContent = 'Розкрити';
//   } else {
//     refs.input.type = 'text';
//     e.target.textContent = 'Приховати';
//   }
// });

// ------------------------------------------------------------

// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const refs = {
//   listThumb: document.querySelector('.eventThumb'),
// };

// document.addEventListener('keydown', e => {
//   const markup = `<li class="eventKey">key -> ${e.key}</li>
//   <li class="eventCode">code -> ${e.code}</li>`;

//   refs.listThumb.insertAdjacentHTML('beforeend', markup);

// });

// ------------------------------------------------------------

// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

// const refs = {
//   box: document.querySelector('.box'),
//   btnDecr: document.querySelector('.js-decrease'),
//   btnIncr: document.querySelector('.js-increase'),
// };

// let boxWidth = refs.box.offsetWidth;

// const onBtnDecr = () => {
//   boxWidth -= 20;

//   refs.box.style.width = `${boxWidth}px`;
//   refs.box.style.height = `${boxWidth}px`;
// };

// const onBtnIncr = () => {
//   boxWidth += 10;

//   refs.box.style.width = `${boxWidth}px`;
//   refs.box.style.height = `${boxWidth}px`;
// };

// refs.btnDecr.addEventListener('click', onBtnDecr);
// refs.btnIncr.addEventListener('click', onBtnIncr);

// const onBoxChange = e => {
//   const { offsetWidth } = refs.box;
//   const { id } = e.target;

//   refs.box.style.width = `${offsetWidth + (id === 'increase' ? 10 : -20)}px`;
//   refs.box.style.height = `${offsetWidth + (id === 'increase' ? 10 : -20)}px`;
// };

// refs.btnDecr.addEventListener('click', onBoxChange);
// refs.btnIncr.addEventListener('click', onBoxChange);
// =============================================================

//При натисканні на кола вони змінюють колір.
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  outerCircle: document.querySelector('.outer-circle'),
  innerCircle: document.querySelector('.inner-circle'),
};

// refs.outerCircle.addEventListener('click', e => {
//   e.target.style.backgroundColor = getRandomColor();
// });

refs.outerCircle.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    e.target.style.borderColor = getRandomColor();
    return;
  }

  e.target.style.backgroundColor = getRandomColor();
});
