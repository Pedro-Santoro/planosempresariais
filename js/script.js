// Código de inicialização imediata. O elemento já existe porque o script
// é carregado no final do <body>.
new Swiper("#meuCarrossel", { 
    
    loop: true, // Mantenha o loop ativo!
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: 1, 
    
    autoplay: {
        delay: 4000,
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
    
    // Breakpoints
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2, 
        },
        1024: {
            slidesPerView: 3, 
            spaceBetween: 50,
            slidesPerGroup: 3, 
        },
    },
});