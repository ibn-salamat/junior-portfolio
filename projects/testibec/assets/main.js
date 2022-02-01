// menu toggle 
let btnToggleMenu = document.querySelector('.btn-menu-toggle'),
    mainMenu = document.querySelector('.main-nav')



btnToggleMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('active')
    btnToggleMenu.classList.toggle('active')
    
    if(mainMenu.classList.contains('active')){
        document.body.style.overflow = 'hidden'
        console.log(document.body)
    } else {
        document.body.style.overflow = 'auto'
    }
})


let elems = Array.from(document.body.getElementsByTagName("*"));


elems.forEach(element => {
    if(element.clientWidth > 300){
        console.log(element )
    }
});