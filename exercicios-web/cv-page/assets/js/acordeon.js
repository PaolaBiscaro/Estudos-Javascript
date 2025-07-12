
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) =>{
    trigger.addEventListener('click', () =>{
        const acordeon = trigger.parentElement
        const open = acordeon.classList.contains('open')
        
        if(open){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
})


