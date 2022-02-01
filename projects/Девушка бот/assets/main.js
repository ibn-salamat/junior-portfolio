let togglerSidebar = document.getElementById('toggle');
let sidebar = document.getElementById('sidebar');
let header = document.getElementById('main-header');

togglerSidebar.addEventListener('click', function(){

	sidebar.classList.toggle('sidebar-active-sidebar');
	header.classList.toggle('sidebar-active-header');


});

let mathWindow =  window.matchMedia( "(min-width: 1024px)" );

// media query event handler
if (matchMedia) {
const mq = window.matchMedia("(min-width: 1024px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {
// window width is at least 500px
document.getElementsByClassName('container')[0].appendChild(sidebar);

document.getElementsByClassName('name')[0].style.display = 'block !important';
document.getElementById('header-min').style.display = 'none ';
} else {
// window width is less than 500px
document.getElementsByClassName('header-bg')[0].appendChild(sidebar);
}

}


let likeBtn = document.getElementsByClassName('like-btn');

for (var i = 0; i < likeBtn.length; i++) {
	likeBtn[i].addEventListener('click', function(){

	if (this.classList[0] == 'liked') {
	this.className = '';
	this.style.backgroundPosition = "0 3px";
	this.style.color = '#676e75';
}
	else{
		this.className = 'liked';
		this.style.backgroundPosition = "0 -33px";
	    this.style.color = '#e62e40';
}
});
}

document.getElementById('btn-follow').addEventListener('click', function(){

	if (this.innerHTML == 'Подписаться') {
	this.classList.toggle('followed');
	this.innerHTML = 'Вы подписаны';

	}
	else{
	this.classList.toggle('followed');
	this.innerHTML = 'Подписаться';

	}
})

let input = document.getElementById('input-message');
let textP = document.getElementById('your-text');
let message = document.getElementsByClassName('message-block')[0];

let yourData = document.getElementById('date-time');




document.getElementById("send-btn").addEventListener("click", handler);

// handler function
function handler(e) {
	// remove this handler
	e.target.removeEventListener(e.type, arguments.callee);

	let inputValue = input.value;

	input.value = '';


	textP.innerHTML = inputValue;


	message.style.display = 'block';

	function test(){
		message.style.background = '#fff';
	}
	function test_1(){
		document.getElementsByClassName('message-block')[1].style.display = 'block';
		document.getElementById("date-time2").innerHTML = d.getHours() + ":" + d.getMinutes() + ' pm';
	}
	function test2(){
		document.getElementsByClassName('message')[0].style.display = 'none';
		document.getElementById('error-message').style.display = 'flex';
	}
 		document.getElementById('profile-open').style.display = 'none';
		document.getElementById('profile-close').style.display = 'none';

		document.getElementById('profile-open').classList.add('close')
		document.getElementById('profile-close').classList.add('open')

	var d = new Date();
    document.getElementById("date-time").innerHTML = d.getHours() + ":" + d.getMinutes() + ' pm';

	setTimeout(test, 2000);

	setTimeout(test_1,3000);

	setTimeout(test2, 4000);


}



let openDialog = document.getElementsByClassName('btn-profile')[0];

openDialog.addEventListener('click', function(){


document.getElementById('profile-open').style.display = 'none';
document.getElementsByClassName('dialog')[0].style.display = 'block';
document.getElementsByClassName('name')[0].style.display = 'block';
document.getElementsByClassName('back')[0].style.display = 'block';
document.getElementById('back').style.display = 'inline-block';


document.getElementById('toggle').style.display = 'none';




})

document.getElementById('back').addEventListener('click',function(){

	this.style.display = 'none'

if( document.getElementById('profile-open').classList.value == "profile close"){
	document.getElementById('profile-open').style.display = 'none';
	document.getElementById('profile-close').style.display = 'block';
}
else{
	document.getElementById('profile-open').style.display = 'block';
	document.getElementById('profile-close').style.display = 'none';
}

document.getElementsByClassName('dialog')[0].style.display = 'none';
document.getElementsByClassName('name')[0].style.display = 'none';


})

document.getElementById('back1').addEventListener('click',function(){

	this.style.display = 'none'

if( document.getElementById('profile-open').classList.value == "profile close"){
	document.getElementById('profile-open').style.display = 'none';
	document.getElementById('profile-close').style.display = 'block';
}
else{
	document.getElementById('profile-open').style.display = 'block';
	document.getElementById('profile-close').style.display = 'none';
}

document.getElementsByClassName('dialog')[0].style.display = 'none';
document.getElementsByClassName('name')[0].style.display = 'none';


})

