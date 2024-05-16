var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

new WOW().init();

setTimeout(function () {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.opacity = "0";
  document.querySelector(".main-screen").style.opacity = "1";
  setTimeout(function () {
    loadingScreen.remove();
    document.body.style.overflow = "auto";
  });
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#heart-fall");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, parseFloat(heart.style.animationDuration) * 1000);
  }

  setInterval(createHeart, 2000);
});
