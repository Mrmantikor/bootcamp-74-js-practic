import { createMarkupMenu } from './createMarkupMenu.js';
import { foodServiceMenu } from './food-service-menu.js';
import { getItemLS, saveLS } from './localStorage.js';
const refs = {
  gallery: document.querySelector('.gallery'),
  toggle: document.querySelector('.theme-switch__toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const THEME_STORAGE_KEY = 'theme';

const markup = createMarkupMenu(foodServiceMenu).join('');
refs.gallery.insertAdjacentHTML('beforeend', markup);

refs.toggle.addEventListener('input', event => {
  const { checked } = event.target;
  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  saveLS(THEME_STORAGE_KEY, checked);
});

const loadPage = () => {
  const savedChecked = getItemLS(THEME_STORAGE_KEY);
  document.body.className = savedChecked ? Theme.DARK : Theme.LIGHT;
  refs.toggle.checked = savedChecked;
};
loadPage();
