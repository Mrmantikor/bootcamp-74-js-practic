const table = document.querySelector('.calendar')
table.addEventListener('click', (event)=>{
    if(event.target.nodeName !== 'TD'){
        return
    }
    const isActive = document.querySelector('.active')
    event.target.classList.toggle('active')
    if(isActive){
      isActive.classList.remove('active')
    }
})