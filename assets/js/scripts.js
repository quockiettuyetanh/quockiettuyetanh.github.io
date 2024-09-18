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

var countDate = new Date("Dec 8, 2024 00:00:00").getTime();

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = addLeadingZero(days);
  document.getElementById("hours").innerHTML = addLeadingZero(hours);
  document.getElementById("minutes").innerHTML = addLeadingZero(minutes);
  document.getElementById("seconds").innerHTML = addLeadingZero(seconds);
}, 1000);

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(document).ready(function () {
  $(".btn-menu-open").click(function () {
    $("#menu-access").addClass("opened");
    $(".btn-menu-open").hide();
    $(".btn-menu-close").show();
    $(".list-menu-icon").css("opacity", "1");
  });

  $(".btn-menu-close").click(function () {
    $("#menu-access").removeClass("opened");
    $(".btn-menu-close").hide();
    $(".btn-menu-open").show();
    $(".list-menu-icon").css("opacity", "0");
  });
});

$(document).ready(function () {
  var liIndex = 0;

  setInterval(function () {
    var li = $("#menu-access li").eq(liIndex);

    li.find(".tooltiptext").css("visibility", "visible");

    if (!li.hasClass("shake_effect")) {
      li.addClass("shake_effect");

      setTimeout(function () {
        li.removeClass("shake_effect");
        li.find(".tooltiptext").css("visibility", "hidden");
      }, 4000);
    }

    liIndex++;
    if (liIndex >= $("#menu-access li").length) {
      liIndex = 0;
    }
  }, 6000);

  $("#menu-access li").hover(
    function () {
      $(this).find(".tooltiptext").css("visibility", "visible");
    },
    function () {
      $(this).find(".tooltiptext").css("visibility", "hidden");
    }
  );
});

let isPlaying = false;

function toggleAudio() {
  const audio = document.getElementById("myAudio");
  const button = document.getElementById("toggleAudio");

  if (isPlaying) {
    audio.pause();
    button.innerHTML = "🔇"; // Change icon to muted
  } else {
    audio.play();
    button.innerHTML = "🔊"; // Change icon to unmuted
  }

  isPlaying = !isPlaying;
}
