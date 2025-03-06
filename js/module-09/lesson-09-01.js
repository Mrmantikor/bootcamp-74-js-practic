import { getItemLS, removeItemLS, saveLS } from './localStorage.js';

const refs = {
  form: document.querySelector('.js-modal__form'),
};
const LOCAL_STORAGE_KEY = 'userData';
const pageLoad = function () {
  const persistedData = getItemLS(LOCAL_STORAGE_KEY);
  if (!persistedData) return;

  Object.entries(persistedData).forEach(([key, value]) => {
    refs.form.elements[key].value = value;
  });
};

pageLoad();

const handleInput = function (event) {
  const { name, value } = event.target;
  let persistedData = getItemLS(LOCAL_STORAGE_KEY) ?? {};

  persistedData[name] = value;
  saveLS(LOCAL_STORAGE_KEY, persistedData);
};

const handleSubmit = function (event) {
  event.preventDefault();
  const formData = new FormData(refs.form);
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  removeItemLS(LOCAL_STORAGE_KEY);

  event.currentTarget.reset();
};

refs.form.addEventListener('input', handleInput);
refs.form.addEventListener('submit', handleSubmit);

// const refs = {
//   form: document.querySelector('.js-modal__form'),
// };
// let userData = {};

// const pageLoad = function () {
//   const persistedData = JSON.parse(localStorage.getItem('userData'));
//   if (!persistedData) return;
//   refs.form.elements.name.value = persistedData.name || '';
//   refs.form.elements.email.value = persistedData.email || '';
//   refs.form.elements.password.value = persistedData.password || '';
//   userData = persistedData;
// };

// pageLoad();
// const handleInput = function (event) {
//   const { name, value } = event.target;
//   userData[name] = value;
//   localStorage.setItem('userData', JSON.stringify(userData));
// };

// const clearFields = function (event) {
//   event.preventDefault();
//   const { name, email, password } = event.target.elements;
//   console.log({ name: name.value, email: email.value, password: password.value });
//   localStorage.removeItem('userData');
//   event.currentTarget.reset();
// };

// refs.form.addEventListener('input', handleInput);
// refs.form.addEventListener('submit', clearFields);
