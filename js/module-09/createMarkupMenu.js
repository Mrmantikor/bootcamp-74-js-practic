export const createMarkupMenu = list => {
  return list.map(
    el => `<li class="menu__item">
   <article class="card">
        <img src="${el.image}" alt="${el.name}" class="card__image" />
        <div class="card__content">
            <h2 class="card__name">${el.name}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                ${el.price} кредитов
            </p>
            <p class="card__descr">
                ${el.description}
            </p>
            <ul class="tag-list">
               ${el.ingredients.map(item => `<li class="tag-list__item">${item}</li>`).join('')}
            </ul>
        </div>
        <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
        </button>
    </article>
</li> `
  );
};
