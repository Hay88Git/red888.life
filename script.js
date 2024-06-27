const openMenu=function(){
    let menu=document.getElementsByClassName("navbar")[0];
    menu.style.left="0%";
}
const closeMenu=function(){
    let menu=document.getElementsByClassName("navbar")[0];
    menu.style.left="-100%";
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });