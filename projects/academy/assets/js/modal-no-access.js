let links = document.querySelectorAll('.modal-no-access-open');
let closeModalNoAccess = document.querySelector('.modal-no-access-close');
let modalNoAccess = document.querySelector('.modal-no-access-wrap');

links.forEach((link) => {


	link.addEventListener('click', (event) => {
		event.preventDefault()
		modalNoAccess.classList.add('active');
	})
})

closeModalNoAccess.addEventListener('click', () => {
	modalNoAccess.classList.remove('active');
})
//
var clickHandler = function (event) {

    // Prevent the link from updating the URL
    event.preventDefault();

    // Do something...

};

var link = document.querySelector('.my-sidebar-bg');
link.addEventListener('mouseover', clickHandler, false);
link.addEventListener('mouseup', clickHandler, false);
link.addEventListener('mousedown', clickHandler, false);
link.addEventListener('mousemove', clickHandler, false);