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
 
 //Change the background on  scroll//
 
 function ChangeHeader(){
   const header =document.getElementById("header");

   if(this.scrollY >= 200) header.classList.add("scroll-header");
   else header.classList.remove("scroll-header");
 }
 window.addEventListener("scroll",ChangeHeader);