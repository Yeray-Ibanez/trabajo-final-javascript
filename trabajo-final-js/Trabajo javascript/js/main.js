const btnMenu = document.querySelector(".btn-menu");
const barIconX = document.querySelector(".btn-menu i");
const menu = document.querySelector(".navbar");

var activador = true;

btnMenu.addEventListener("click",()=>{
    barIconX.classList.toggle("fa-times");

    if(activador){
        menu.style.left = "0";
        activador = false;
    }else{
        menu.style.left = '-100%';
        activador = true;
    }
})