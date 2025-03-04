/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно:
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент.
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================*/

/**
  |============Розмітка для модального вікна================
  <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
  |============================
*/
const buttonOpen = document.querySelector('.js-modal-open');
const instance = basicLightbox.create(
  `
     <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
`,
  {
    onShow: instance => {
      document.addEventListener('keydown', onEscClick);
    },

    onClose: instance => {
      document.removeEventListener('keydown', onEscClick);
    },
  }
);

const onOpenModalBtnElClick = () => {
  instance.show();
  const buttonClouse = document.querySelector('.js-modal-close');
  buttonClouse.addEventListener('click', closeModalWindow);
  const form = document.querySelector('.js-modal__form');
  form.addEventListener('submit', onSubmit);
};
buttonOpen.addEventListener('click', onOpenModalBtnElClick);
const closeModalWindow = function (event) {
  instance.close();
};
const onEscClick = event => {
  if (event.code !== 'Escape') {
    return;
  }
  instance.close();
};

const onSubmit = function (event) {
  event.preventDefault();
  const { name, email, password } = event.target.elements;
  if (!email.value || !password.value.trim()) {
    return alert('email or password is empty');
  }
  const userData = { name: name.value || 'Anonimus', email: email.value, password: password.value };
  console.log(userData);
  event.currentTarget.reset();
  closeModalWindow();
};

/**
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача 
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо користувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================
*/
