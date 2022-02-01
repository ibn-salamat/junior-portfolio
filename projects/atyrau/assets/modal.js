        
let modalWrap = document.querySelector('.modal-wrap');
function activeTab(elmnt){

    document.querySelectorAll('.tab-links')[0].classList.remove('active');
    document.querySelectorAll('.tab-links')[1].classList.remove('active');
    document.querySelector('.login-modal').classList.remove('active');
    document.querySelector('.reg-modal').classList.remove('active');

    elmnt.classList.toggle('active');

    if( elmnt.classList[1] == 'reg-tab'){
        document.querySelector('.reg-modal').classList.add('active');
    }
    else {
        document.querySelector('.login-modal').classList.add('active');
    }
}

        
function activeModal(elmnt){

    modalWrap.classList.toggle('active');
    let popupMenu = document.querySelector('.popup-menu');
    popupMenu.classList.remove('is-visible');


    if( elmnt.classList.contains('log')){
        document.querySelector('.login-modal').classList.add('active');
        document.querySelectorAll('.tab-links')[0].classList.add('active');
      
    }
    else {
    
        document.querySelector('.reg-modal').classList.add('active');
        document.querySelectorAll('.tab-links')[1].classList.add('active');
    }

}

let closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', function () {
    document.querySelectorAll('.tab-links')[0].classList.remove('active');
    document.querySelectorAll('.tab-links')[1].classList.remove('active');
    document.querySelector('.login-modal').classList.remove('active');
    document.querySelector('.reg-modal').classList.remove('active');
    modalWrap.classList.remove('active');

});


