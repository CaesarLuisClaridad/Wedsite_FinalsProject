var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 6,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,
    speed: 800,

    on: {
      init: function () {
        updateNavigationEffects(this);
      },
      slideChange: function () {
        updateNavigationEffects(this);
      },
    },
  });

  // Function to manage fade effects and button visibility
  function updateNavigationEffects(swiper) {
    const swiperContainer = document.querySelector(".swiper-container");
    const prevEl = swiper.navigation.prevEl;
    const nextEl = swiper.navigation.nextEl;

    // Show/hide prevEl and nextEl buttons
    prevEl.style.display = swiper.isBeginning ? "none" : "flex";
    nextEl.style.display = swiper.isEnd ? "none" : "flex";

    // Add/remove fade effect class
    if (swiper.isBeginning) {
      swiperContainer.classList.remove("fade-left"); // Remove fade on the left
    } else {
      swiperContainer.classList.add("fade-left");
    }

    if (swiper.isEnd) {
      swiperContainer.classList.remove("fade-right"); // Remove fade on the right
    } else {
      swiperContainer.classList.add("fade-right");
    }
  }