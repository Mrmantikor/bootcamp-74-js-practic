/*const refs = {
    inputsList: document.querySelectorAll('input'),
}

refs.inputsList.forEach(el => {
    el.addEventListener('input', event => {
      let sizing = '';
      if (event.target.dataset.sizing) {
        sizing = event.target.dataset.sizing;
      }
      document.documentElement.style.setProperty(
        `--${event.target.name}`,
        event.target.value + sizing
      );
    });
})*/

const refs ={
  inputList: document.querySelector('.js-controls')
}
refs.inputList.addEventListener('input', (event) => {
    if(event.target.nodeName !== 'INPUT'){
        return;
  }
   let sizing = '';
  if (event.target.dataset.sizing) {
        sizing = event.target.dataset.sizing;
  }
   document.documentElement.style.setProperty(
        `--${event.target.name}`,
        event.target.value + sizing
      );
})