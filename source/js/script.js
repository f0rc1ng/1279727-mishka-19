var navMain = document.querySelector(".site-list");
var navToggle = document.querySelector(".main-nav__toggle");
var navOff = document.querySelector(".user-list");

navMain.classList.remove("main-nav__list--nojs");
navOff.classList.remove("main-nav__list--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__list--closed")) {
    navMain.classList.remove("main-nav__list--closed");
    navMain.classList.add("main-nav__list--opened");
  } else {
    navMain.classList.add("main-nav__list--closed");
    navMain.classList.remove("main-nav__list--opened");
  }
});

navToggle.addEventListener("click", function () {
  if (navOff.classList.contains("main-nav__list--closed")) {
    navOff.classList.remove("main-nav__list--closed");
    navOff.classList.add("main-nav__list--opened");
  } else {
    navOff.classList.add("main-nav__list--closed");
    navOff.classList.remove("main-nav__list--opened");
  }
});

var modal = document.querySelector(".popup-cart");
var modal_wrapper = document.querySelector(".popup-cart__wrapper");
var modal_btn = document.querySelector(".popup-cart__button");

var btn = document.querySelector(".product-week__button");

var openPopUp = function () {
  modal.classList.remove("popup-cart--closed");
};

var closePopUp = function () {
  modal.classList.add("popup-cart--closed");
};

modal.addEventListener("click", function (e) {
  if (!modal_wrapper.contains(e.target)) {
    closePopUp();
  }
});
