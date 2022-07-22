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

 //====remove menu on click for mobile=======
 const navLink = document.querySelectorAll(".nav_link");

 function linkAction(){
   const navMenu =document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
 }
 navLink.forEach((link) => link.addEventListener("click" , linkAction));

//============scrollUp=========
function scrollUp(){
   const scrollUp = document.getElementById("scroll-up");
   
   if(this.scrollY >= 350 ) scrollUp.classList.add("show-scroll");
   else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll" ,scrollUp);

//-------------------------swiper js------
var swiper = new Swiper(".popular_container", {
   loop: true,
   spaceBetween:24,
   slidePerView:"auto",
   grabCursor:true,
   pagination: {
     el: ".swiper-pagination",
     dynamicBullets: true,
   },
   breakpoints:{
      768:{
         slidesPerView: 3,
      },
      1024: {
         spaceBetween: 48,
      },

   },

 });

 //product section------------------------
 var mixerProducts = mixitup(".product_content", {
   selectors: {
       target: ".product_card",
   },
   animation: {
       duration: 300,
   },
});

const linkProduct= document.querySelectorAll(".product_items");
function activeProduct(){
   linkProduct.forEach((link) => link.classList.remove("active-product"));
   this.classList .add("active-product");
};
linkProduct.forEach((link) => link.addEventListener("click",activeProduct));

//--------------------------scroll screen-----
const sr = ScrollReveal({
   origin:"top",
   distance: "60px",
   duration :2500,
   delay: 400,
});

sr.reveal(".home-sub");
sr.reveal(".home_title" , {delay:500});
sr.reveal(".home_description" ,{delay:600});
sr.reveal(".home_btn" ,{delay:700});
sr.reveal(".home_value-number, .home_value-description" ,{delay:800});
sr.reveal(".line-h" ,{delay:800});
//image come from bottom to up
sr.reveal(".home_img", {delay:900,origin:"bottom"});
sr.reveal(".about_data", {origin:"right"});
sr.reveal(".about_img", {origin:"left"});

sr.reveal(".brands_content", {interval:100});
sr.reveal(".why_data");

//popular section
sr.reveal(".popular h2");
sr.reveal(".popular_cards", {delay:500,origin:"right"});

//newsletter
sr.reveal(".newsletter_data", {origin:"bottom"});

//product
sr.reveal(".product_subtitle");
sr.reveal(".product h2", {delay: 500});
sr.reveal(".product_filters", {delay:600});
sr.reveal(".product_card", {delay:700,interval:100});

sr.reveal(".app_container", {origin:"bottom"});
sr.reveal(".app_data", {delay:500,origin:"left"});
sr.reveal(".app_img", {delay:600,origin:"right"});

sr.reveal(".footer-box", {interval:100});
sr.reveal(".copyright", {delay:500});
sr.reveal(".footer_box", {interval:100});