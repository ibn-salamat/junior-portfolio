
var btn = document.getElementById("btn");
var btnx = document.getElementById("btnx");
var videoh = document.getElementById("videos").offsetHeight + "px";
var contents = [document.getElementById("content_text_1"),document.getElementById("content_text_2"),document.getElementById("content_text_3"),document.getElementById("content_text_4")];
for(var i = 0; i < contents.length; i++){
    contents[i].style.height = videoh;
}

 

function openNav(){
    document.getElementById("block").style.left = 0;
    btn.style.display = "none";
    btnx.style.display = "block";
    document.getElementById("header").style.background = "#121212";
}
function closeNav(){
    document.getElementById("block").style.left = "100%";
    btn.style.display = "block";
    btnx.style.display = "none";
    document.getElementById("header").style.background = "rgba(0,0,0,0.7)";
}
if (window.matchMedia("(min-width: 1024px)").matches){
    btn.style.display = "none";
}

function openInput(){
    document.getElementById("search").style.display = "block";
    document.getElementById("btnxx").style.display = "block";
    document.getElementById("search_block").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("block").style.display = "none";
}

function closeInput(){
    if (window.matchMedia("(min-width: 1024px)").matches){
        document.getElementById("search").style.display = "none";
        document.getElementById("btnxx").style.display = "none";
        document.getElementById("search_block").style.display = "block";
        document.getElementById("btn").style.display = "none";
        document.getElementById("block").style.display = "flex";
    }else{
        document.getElementById("search").style.display = "none";
        document.getElementById("btnxx").style.display = "none";
        document.getElementById("search_block").style.display = "block";
        document.getElementById("btn").style.display = "block";
        document.getElementById("block").style.display = "block";
    }

}
