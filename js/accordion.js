/*const refs = {
    buttonsList: document.querySelectorAll('.js-accordion-btn'),
};

refs.buttonsList.forEach(element => {
    element.addEventListener('click', () => {
        // if (element.nextElementSibling.classList.contains('active')) {
        //     element.nextElementSibling.classList.remove('active');
        // } else {
        //     element.nextElementSibling.classList.add('active');
        // }
        element.nextElementSibling.classList.toggle('active');      
    })
});*/

const refs ={
    buttonList : document.querySelector('.js-accordion-list'),
};

/*refs.buttonList.addEventListener('click', (event) => {
    if(!event.target.classList.contains('js-accordion-btn')){
        return;
    }
    event.target.nextElementSibling.classList.toggle('active');
})*/

refs.buttonList.addEventListener('click', (event) => {
    if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    event.target.nextElementSibling.classList.toggle('active');
})