

    function openInput(){
        document.getElementById("search").style.display = "block";
        document.getElementById("btnxx").style.display = "block";
        document.getElementById("search_block").style.display = "none";
        document.getElementById("block").style.display = "none";
    }
    
    function closeInput(){
            document.getElementById("search").style.display = "none";
            document.getElementById("btnxx").style.display = "none";
            document.getElementById("search_block").style.display = "block";
            document.getElementById("block").style.display = "flex";
        
    }
    


  
//footer
function showAnswer(){
    document.getElementById("all-questions").style.display = "block";
    document.getElementById("more-btn").style.display = "none";
    document.getElementById("hide-btn").style.display = "block";
}
function hideAnswer(){
    document.getElementById("all-questions").style.display = "none";
    document.getElementById("more-btn").style.display = "block";
    document.getElementById("hide-btn").style.display = "none";
}
//model
function showColor1(){
    document.querySelector("div.first h1").innerHTML = "Выберите цвет.";
    document.querySelector("div.first p").style.display = "none";
    document.querySelector(".model").style.display = "none";
    document.querySelector(".colors").style.display = "flex";
    document.querySelector(".colors .iphone8").style.display = "flex";
    document.getElementById("active").classList.remove("active");
    document.getElementById("color").classList.add("active");
    document.getElementById("view1").style.display = "flex";

    if(document.getElementById("color8").style.display = "flex"){
document.getElementById("color8p").style.display = "none";
}

}
function showColor2(){
    document.querySelector("div.first h1").innerHTML = "Выберите цвет.";
    document.querySelector("div.first p").style.display = "none";
    document.querySelector(".model").style.display = "none";
    document.querySelector(".colors").style.display = "flex";
    document.querySelector(".colors .iphone8p").style.display = "flex";
    document.getElementById("active").classList.remove("active");
    document.getElementById("color").classList.add("active");
    document.getElementById("view2").style.display = "flex";


if(document.getElementById("color8p").style.display = "flex"){
document.getElementById("color8").style.display = "none";
}
}

var background1 = document.querySelectorAll(".colors .iphone8  .background"); 
var background2 = document.querySelectorAll(".colors .iphone8p  .background"); 

function viewBack1(){
    for(var i = 0; i < background1.length; i++){
background1[i].classList.remove("back");
background1[i].classList.remove("front");
background1[i].classList.add("back");
document.getElementById("back1").classList.remove("view-active");
document.getElementById("front1").classList.remove("view-active");
document.getElementById("back1").classList.add("view-active");

}}
function viewFront1(){
    for(var i = 0; i < background1.length; i++){
background1[i].classList.remove("back");
background1[i].classList.add("front");
document.getElementById("back1").classList.remove("view-active");
document.getElementById("front1").classList.add("view-active");
}}

function viewBack2(){
    for(var i = 0; i < background2.length; i++){
background2[i].classList.remove("back");
background2[i].classList.remove("front");
background2[i].classList.add("back");
document.getElementById("back2").classList.remove("view-active");
document.getElementById("front2").classList.remove("view-active");
document.getElementById("back2").classList.add("view-active");
}}

function viewFront2(){
    for(var i = 0; i < background2.length; i++){
background2[i].classList.remove("back");
background2[i].classList.add("front");
document.getElementById("back2").classList.remove("view-active");
document.getElementById("front2").classList.add("view-active");
}}

function showModel(){
    document.getElementById("model").style.display = "flex";
    document.getElementById("active").classList.add("active");
    document.getElementById("color").classList.remove("active");
    document.getElementById("capacity").classList.remove("active");
    document.getElementById("view1").style.display = "none";
    document.getElementById("view2").style.display = "none";
    document.getElementById("colors").style.display = "none";
    document.querySelector("div.first h1").innerHTML = "Выберите модель iPhone 8.";
    document.querySelector("div.first p").style.display = "block";
    document.getElementById("gabarits").style.display = "none";
    document.getElementById("finish").classList.remove("active");

}

function showCapacity(){
    document.querySelector("div.first h1").innerHTML = "Теперь выберите ёмкость.";
    document.querySelector("div.first p").style.display = "none";
    document.getElementById("gabarits").style.display = "flex";
    document.getElementById("colors").style.display = "none";
    document.getElementById("view1").style.display = "none";
    document.getElementById("view2").style.display = "none";
    document.getElementById("color").classList.remove("active");
    document.getElementById("capacity").classList.add("active");
}

function showFinish(){
    document.getElementById("capacity").classList.remove("active");
    document.getElementById("finish").classList.add("active");
    document.querySelector("div.first h1").innerHTML = "Поздравляем!" + "<br>" + "Вы только что купили iPhone.";
    document.getElementById("gabarits").style.display = "none";
}