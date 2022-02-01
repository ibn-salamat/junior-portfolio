let btnMenu = document.querySelector('button.toggle-menu');
let menu = document.querySelector('.main-nav');

btnMenu.addEventListener('click', function () {
    menu.classList.toggle('active-menu');
    document.body.classList.toggle('dont-scroll');
});

btnMenu.onclick =  function(){
	if(!(this.classList.contains('form-close'))){
       this.classList.toggle('active');
	}
}