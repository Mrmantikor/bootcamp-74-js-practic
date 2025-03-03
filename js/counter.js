const buttons = document.querySelector('.buttons')
const span = document.querySelector('#count')
let count = 0

// buttons.addEventListener('click', (event)=>{
//     if(event.target.classList.contains('increase')){
//         count += 1
//     }
//     if(event.target.classList.contains('decrease')){
//         count -= 1
//     }
//     if(event.target.classList.contains('reset')){
//         count = 0
//     }
//     if( count > 0 ){
//         span.style.color = 'green'
//     }
//     if( count < 0 ){
//         span.style.color = 'red'
//     }
//     if( count === 0 ){
//         span.style.color = 'black'
//     }
//     span.textContent = count
//
// })

buttons.addEventListener('click', (event)=>{
    if(event.target.id === 'increase'){
        count += 1
    }else if(event.target.id ==='decrease'){
        count -= 1
    }else if(event.target.id === 'reset'){
        count = 0
    }
    if( count > 0 ){
        span.classList.remove('negative', 'neutral')
        span.classList.add('positive')
    }else if( count < 0 ){
        span.classList.remove('positive', 'neutral')
        span.classList.add('negative')
    }else if( count === 0 ){
        span.classList.remove('positive', 'negative')
        span.classList.add('neutral')
    }
    span.textContent = count
})

