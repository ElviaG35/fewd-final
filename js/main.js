
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navMenu");

// hamburger.addEventListener("click", () =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n. 
//     addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     }))


const buttonOpen =document.querySelector('header button');

buttonOpen.addEventListener('click',showMenu);

function showMenu () {
    document.body.classList.add('menu-open')
}


const buttonClose =document.querySelector('menu button');

buttonClose.addEventListener('click',hideMenu);

function hideMenu () {
    document.body.classList.remove('menu-open')
}