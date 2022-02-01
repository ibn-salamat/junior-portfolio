let slide = document.querySelector('.slider');
let left = 0;


function prevSlide(){
    left = left + 420;
    slide.style.left =+ left + 'px';

    if(slide.style.left == '5460px'){
        slide.style.left = 0;
        left = 420;
    }
}

function nextSlide(){
    left = left - 420;
    slide.style.left =+ left + 'px';

    if(slide.style.left == '-5460px'){
        slide.style.left = 0;
        left = 420;
    }
}