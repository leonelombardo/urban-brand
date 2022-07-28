const $ = e => document.querySelector(e);

const menuIcon = $("#nav-menu-icon");
const navMenu = $("#nav-menu");

menuIcon.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu-toggler");
})