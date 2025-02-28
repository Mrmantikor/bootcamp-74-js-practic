const refs = {
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
})