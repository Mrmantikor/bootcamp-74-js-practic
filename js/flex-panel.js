/*const refs = {
    itemsList:  document.querySelectorAll('.js-panel'),
}

refs.itemsList.forEach(el => {
    el.addEventListener('click', event => {
        const isOpen = document.querySelector('.open');
        
        event.currentTarget.classList.toggle('open');
        if (isOpen) {
            isOpen.classList.remove('open');
        }
    })
})*/

const refs = {
    itemList: document.querySelector('.js-panels'),
}
refs.itemList.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        return;
    }
    const item = event.target.closest('li');
        const isOpen = document.querySelector('.open');
        
        item.classList.toggle('open');
    if (isOpen) {
        isOpen.classList.remove('open');
    }
})