var swiper = new Swiper(".mySwiper", {
  loop: true, // faz o carrossel girar em loop
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, // muda de slide a cada 5s
    disableOnInteraction: false,
  },
});
