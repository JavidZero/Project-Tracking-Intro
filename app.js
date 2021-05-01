const nav = document.querySelector(".container nav .navbar");
const btn = document.querySelector("span");

btn.addEventListener('click',()=>{
    nav.classList.toggle('add');
})