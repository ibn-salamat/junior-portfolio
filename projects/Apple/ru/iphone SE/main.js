

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
function showColor(){
    document.querySelector("div.first h1").innerHTML = "Выберите цвет.";
    document.querySelector(".model").style.display = "none";
    document.getElementById("colors").style.display = "flex";
    document.getElementById("active").classList.remove("active");
    document.getElementById("color").classList.add("active");
    document.getElementById("view").style.display = "flex";
    document.getElementById("back").style.display = "flex";

}

var background = document.querySelectorAll(".colors .iphonese  .background"); 



function viewBack(){
    for(var i = 0; i < background.length; i++){
background[i].classList.remove("back");
background[i].classList.remove("front");
background[i].classList.add("back");
document.getElementById("back").classList.remove("view-active");
document.getElementById("front").classList.remove("view-active");
document.getElementById("back").classList.add("view-active");
}}

function viewFront(){
    for(var i = 0; i < background.length; i++){
background[i].classList.remove("back");
background[i].classList.add("front");
document.getElementById("back").classList.remove("view-active");
document.getElementById("front").classList.add("view-active");
}}

function showModel(){
    document.getElementById("model").style.display = "flex";
    document.getElementById("active").classList.add("active");
    document.getElementById("color").classList.remove("active");
    document.getElementById("capacity").classList.remove("active");
    document.getElementById("view").style.display = "none";
    document.getElementById("colors").style.display = "none";
    document.querySelector("div.first h1").innerHTML = "Купите новый iPhone SE.";
    document.getElementById("gabarits").style.display = "none";
    document.getElementById("finish").classList.remove("active");

}

function showCapacity(){
    document.querySelector("div.first h1").innerHTML = "Теперь выберите ёмкость.";
    document.getElementById("gabarits").style.display = "flex";
    document.getElementById("colors").style.display = "none";
    document.getElementById("view").style.display = "none";
    document.getElementById("color").classList.remove("active");
    document.getElementById("capacity").classList.add("active");
}

function showFinish(){
    document.getElementById("capacity").classList.remove("active");
    document.getElementById("finish").classList.add("active");
    document.querySelector("div.first h1").innerHTML = "Поздравляем!" + "<br>" + "Вы только что купили iPhone SE.";
    document.getElementById("gabarits").style.display = "none";
}