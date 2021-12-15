const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");



hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("open");
    body.classList.toggle("stop-scroll")
});



