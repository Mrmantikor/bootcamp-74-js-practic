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

const refs = {
  input: document.querySelector('.js-username-input'),
  form: document.querySelector('.js-contact-form'),
  userName: document.querySelector('.js-username-output'),
};

const hadleInputValidation = function () {
  // refs.userName.textContent = refs.input.value ? refs.input.value : 'Anonimous';
  refs.userName.textContent = refs.input.value || 'Anonimous';
};
const handleSubmit = function (e) {
  e.preventDefault();

  const { accept, userName } = e.target.elements;
  if (!userName.value || !accept.checked) {
    alert('Not valid data');
    return;
  }
  const userdata = { name: userName.value };
  console.log(userdata);
  refs.form.reset();
  refs.userName.textContent = 'Anonimous';
};

refs.input.addEventListener('input', hadleInputValidation);
refs.form.addEventListener('submit', handleSubmit);

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
