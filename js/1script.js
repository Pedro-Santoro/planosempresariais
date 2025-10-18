document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    // Quantos slides mostrar por vez
    slidesPerView: 1,

    // Espaçamento entre os slides
    spaceBetween: 30,

    // Loop infinito (para deixar mais dinâmico)
    loop: true,

    // Adiciona Autoplay (passa sozinho)
    autoplay: {
      delay: 5000, // Tempo em milissegundos (5 segundos)
      disableOnInteraction: false, // Não para ao interagir com a seta
    },

    // Ativa a Paginação (bolinhas)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Ativa a Navegação (setas)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Configurações para Responsividade (mostra mais slides em telas maiores)
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
});
