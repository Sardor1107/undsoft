var elbtn = document.querySelector (".hamburger__btn");
var elmodal = document.querySelector ("modal");
elbtn.addEventListener("click", function(){
    elmodal.classList.toggle("open");
})