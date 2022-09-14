"use strict";
"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});
var swiper = new Swiper('.mySwiper', (_Swiper = {
  slidesPerView: 'auto',
  centeredSlides: true
}, _defineProperty(_Swiper, "slidesPerView", 1), _defineProperty(_Swiper, "spaceBetween", 24), _defineProperty(_Swiper, "pagination", {
  el: '.myswiper-pagination',
  clickable: true
}), _defineProperty(_Swiper, "breakpoints", {
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true
  }
}), _Swiper)); //瀑布流//

$('.row-Masonry').imagesLoaded().progress(function () {
  $('.row-Masonry').masonry();
});
//# sourceMappingURL=all.js.map
