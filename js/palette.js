// Для динамічного створення палітри
function getRangomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
    return Math.round(Math.random() * 256)
        .toString(16)
        .padStart(2, '0');
}

const ul = document.querySelector('.js-pallet')
    const childrenList = [...ul.children]
childrenList.forEach(item => {
    const randomColor = getRangomColor()
    item.style.background = randomColor
    item.dataset.color = randomColor
})

ul.addEventListener('click', (event)=>{
    if (event.target.nodeName === 'UL'){
        return
    }
    const item = event.target.closest('li')

    const isActive = document.querySelector('.active')
    if(isActive){
        isActive.classList.remove('active')
        isActive.firstElementChild.textContent = '...'
    }

    if(item === isActive){
        return
    }
    item.firstElementChild.textContent = item.dataset.color
    item.classList.add('active')
})