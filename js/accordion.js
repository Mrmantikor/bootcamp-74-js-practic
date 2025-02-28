const refs = {
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
});