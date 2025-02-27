// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// const refs = {
//   body: document.querySelector('body'),
//   title: document.querySelector('#title'),
//   list: document.querySelector('.list'),
//   topicsList: document.querySelectorAll('[data-topic]'),
//   firstTopic: document.querySelector('[data-topic]'),
//   fisrtTopic2: document.querySelectorAll('[data-topic]')[0],
//   firstTopic3: document.querySelector('.list').firstElementChild,
//   firstTopic4: document.querySelector('.list li'),
//   firstTopic5: document.querySelector('[data-topic]:first-child'),
//   firstTopic6: document.querySelector('.list').children[0],
//   firstTopic7: document.querySelector('[data-topic]:nth-child(1)'),
//   lastTopic: document.querySelector('[data-topic]:last-child'),
//   sibling: document.querySelector('#title').nextElementSibling,
//   allTitle: document.querySelectorAll('h3'),
//   navigation: document.querySelector('li[data-topic="navigation"]'),
// };

// console.log(refs.navigation);
// refs.topicsList.forEach(topic => {
//   console.log(topic);
//   const title = topic.querySelector('h3');
//   console.log(title);
// });

// refs.allTitle.forEach(title => title.classList.add('active'));
// refs.navigation.style.backgroundColor = 'yellow';
// const description = (refs.navigation.querySelector('p').textContent = 'Я змінив тут текст!');
// const currentTopic = 'manipulation';
// const topicEl = document.querySelector(`li[data-topic="${currentTopic}"]`);
// // console.log(topicEl);
// topicEl.style.backgroundColor = 'blue';
// const completedEl = document.querySelector('.completed');
// console.log(completedEl.parentElement);
// console.log(completedEl.parentNode);
// console.log(completedEl.closest('li').remove());
// const newP = (document.createElement('p').textContent =
//   "Об'єктна модель документа (Document Object Model)");
// refs.title.after(newP);
// const newLi = document.createElement('li');
// const newH3 = document.createElement('h3');
// newH3.textContent = 'Властивість innerHTML';
// const superNewP = document.createElement('p');
// superNewP.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// newLi.append(newH3, superNewP);
// refs.list.appendChild(newLi);

// const superNewLi = `<li>
//       <h3>Властивість innerHTML</h3>
//       <p>
//         Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
//       </p>
//     </li>`;
// refs.list.insertAdjacentHTML('beforeend', superNewLi);
// refs.list.innerHTML = '';

/**
 * Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul).
 * `Створи` html - елемент списку і `додай` його у розмітку.Попрактикуйся з методами`append`, `prepend`, `after`, `before`
 * заповнивши ними список елементами з масивів.Для зручності створи допоміжну функцію`elementsOfIngridients`,
 * яка повертатиме масив елементів(масив з лішками).
 */
// const appendFruitList = ['apple🍎', 'banana🍌'];
// const prependFruitList = ['grapes🍇', 'orange🍊'];
// const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
// const afterFruitList = ['peach🍑', 'kiwi🥝'];
//
// const createMarkup = (array) =>{
//    return array.map(el => {
//         const li = document.createElement('li')
//         li.textContent = (el)
//         return li
//     })
//
// }
const list = document.querySelector('.film-list')
//
// const list1 = createMarkup(appendFruitList)
// const list2 = createMarkup(prependFruitList)
// const list3 = createMarkup(beforeFruitList)
// const list4 = createMarkup(afterFruitList)
//
// list.append(...list1)
// list.prepend(...list2)
// list.before(...list3)
// list.after(...list4)
// console.log(list1)

// 3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

// const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
//
// "".split(/\s+/); // Розбиваємо текст на слова за допомогою роздільників (пробіли, коми, крапки і т.д.)
// const words = text.split(/\s+/)

// const textEl = document.createElement('p')
//
// words.forEach(word => {
//     if(word.length > 8){
//        const span= document.createElement('span')
//         span.textContent = (word + ' ')
//         span.style.backgroundColor = "yellow"
//         textEl.appendChild(span)
//     }else {
//         textEl.innerHTML = textEl.innerHTML + word + ' '
//     }
// })
//
// list.after(textEl)

// const textEl = words.map(word => {
//     return word.length>8 ? `<span style="background:yellow"> ${word} </span>` : word
// }).join(' ')
//
// list.innerHTML = (textEl)