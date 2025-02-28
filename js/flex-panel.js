const refs = {
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
})