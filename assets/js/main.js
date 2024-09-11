//  ====================================================================================================================================
let btnToggle = document.querySelector(".btn-navbar-toggler");
let listNav = document.querySelector(".box-navbar-nav");
let btnCloseNav = document.querySelector(".btn-close-nav");

document.addEventListener("DOMContentLoaded", () => {
  // createElement in Dom
  let layerScreen = document.createElement("div");
  layerScreen.className = "box-layer-screen";
  layerScreen.textContent = "";
  // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
  document.body.appendChild(layerScreen);
  let navbarComprehensive = document.querySelector(".box-navbar");
  layerScreen.remove();

  //   --------------------------------------------------
  btnToggle.onclick = () => {
    // console.log("btnToggle");
    listNav.classList.toggle("active");

    // ---------------------
    if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
      navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
      setTimeout(() => {
        layerScreen.classList.add("visible");
      }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
    } else if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.toggle("visible");
    }
  };

  //   -----------------------------
  btnCloseNav.onclick = () => {
    console.log("btnCloseNav");
    listNav.classList.remove("active");

    //-------------------
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };

  // -------------------------------
  layerScreen.onclick = () => {
    console.log("layerScreen");
    listNav.classList.remove("active");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };
});

// ==================================================================================================

// ======================================================================================================
// video-About
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const btnVideoAbout = document.querySelector(".btn-video-About");
    if (btnVideoAbout) {
      btnVideoAbout.addEventListener("click", function () {
        const boxVideo = document.querySelector(".box-video");
        if (boxVideo) boxVideo.style.display = "flex";

        const video = document.querySelector(".video-mp4");
        if (video) video.play(); // تشغيل الفيديو بالصوت
      });
    }

    const btnCloseVideo = document.querySelector(".btn-close-video");
    if (btnCloseVideo) {
      btnCloseVideo.addEventListener("click", function () {
        const video = document.querySelector(".video-mp4");
        if (video) {
          video.pause(); // إيقاف الفيديو
          video.currentTime = 0; // إعادة الفيديو للبداية
        }
        const boxVideo = document.querySelector(".box-video");
        if (boxVideo) boxVideo.style.display = "none";
      });
    }

    const boxVideo = document.querySelector(".box-video");
    if (boxVideo) {
      boxVideo.addEventListener("click", function (event) {
        const videoBox = document.querySelector(".box-video-mp4");
        if (videoBox && !videoBox.contains(event.target)) {
          const video = document.querySelector(".video-mp4");
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
          boxVideo.style.display = "none";
        }
      });
    }
  });
})();

// =================================================================================

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // تحقق من وجود العنصر قبل إنشاء Swiper
    if (document.querySelector(".swiper-Teachers")) {
      var swiper = new Swiper(".swiper-Teachers", {
        rtl: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
          },
        },
        on: {
          init: function () {
            updatePagination(this);
          },
          slideChange: function () {
            updatePagination(this);
          },
        },
      });
  
      function updatePagination(swiperInstance) {
        var totalSlides = swiperInstance.slides.length;
        var currentSlide = (swiperInstance.realIndex % totalSlides) + 1;
        var paginationElement = document.querySelector(".swiper-pagination-2");
        if (paginationElement) {
          paginationElement.innerHTML = currentSlide + " / " + totalSlides;
        }
      }
  
      // تأكد من وجود العنصر قبل إضافة مستمع الحدث
      var paginationElement = document.querySelector(".swiper-pagination-2");
      if (paginationElement) {
        paginationElement.addEventListener("click", function () {
          updatePagination(swiper);
        });
      }
  
      var nextButton = document.querySelector(".swiper-button-next");
      if (nextButton) {
        nextButton.addEventListener("click", function () {
          updatePagination(swiper);
        });
      }
  
      var prevButton = document.querySelector(".swiper-button-prev");
      if (prevButton) {
        prevButton.addEventListener("click", function () {
          updatePagination(swiper);
        });
      }
    }
  });
  
})();
// ==================================================================================================
(function () {
  // تحقق من وجود العنصر قبل إنشاء الـ Swiper
  if (document.querySelector(".swiper-Ratings")) {
    var swiper = new Swiper(".swiper-Ratings", {
      rtl: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination-11",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.4,
          centeredSlides: true,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      on: {
        init: function () {
          updatePagination(this);
        },
        slideChange: function () {
          updatePagination(this);
        },
      },
    });

    function updatePagination(swiperInstance) {
      var totalSlides = swiperInstance.slides.length;
      var currentSlide = (swiperInstance.realIndex % totalSlides) + 1;
      var paginationElement = document.querySelector(".swiper-pagination-22");
      if (paginationElement) {
        paginationElement.innerHTML = currentSlide + " / " + totalSlides;
      }
    }

    // تحقق من وجود العناصر قبل إضافة مستمعات الأحداث
    var paginationElement = document.querySelector(".swiper-pagination-22");
    if (paginationElement) {
      paginationElement.addEventListener("click", function () {
        updatePagination(swiper);
      });
    }

    var nextButton = document.querySelector(".swiper-button-next");
    if (nextButton) {
      nextButton.addEventListener("click", function () {
        updatePagination(swiper);
      });
    }

    var prevButton = document.querySelector(".swiper-button-prev");
    if (prevButton) {
      prevButton.addEventListener("click", function () {
        updatePagination(swiper);
      });
    }
  }
})();
