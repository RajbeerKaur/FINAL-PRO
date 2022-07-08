//NAV MENU
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click" ,() => {
   navMenu.classList.add("show-menu");
});

navClose.addEventListener("click" ,() => {
    navMenu.classList.remove("show-menu");
 });