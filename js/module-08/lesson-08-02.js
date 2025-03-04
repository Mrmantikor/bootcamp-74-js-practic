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
const buttonOpen = document.querySelector('.js-modal-open')
const instance = basicLightbox.create(`
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
`,{
	
	onShow: (instance) => {document.addEventListener('keydown', onEscClick)},

	onClose: (instance) => {document.removeEventListener('keydown', onEscClick)},
}
)

const onOpenModalBtnElClick = () => {  
    instance.show()   
    const buttonClouse = document.querySelector('.js-modal-close')
    buttonClouse.addEventListener('click',closeModalWindow) 
    
}
buttonOpen.addEventListener('click', onOpenModalBtnElClick)
const closeModalWindow = function (event) {
    instance.close()
}
const onEscClick = event => {
    if (event.code !== 'Escape') {
        return;
    } instance.close()
}


