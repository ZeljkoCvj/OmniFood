window.addEventListener("scroll", function(){
var header = document.querySelector(".head");
header.classList.toggle("sticky", window.scrollY > 0);
});