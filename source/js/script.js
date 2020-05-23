var navMain = document.querySelector(".site-list");
var navToggle = document.querySelector(".main-nav__toggle");
var navOff = document.querySelector(".user-list");

navMain.classList.remove("main-nav__nojs");
navOff.classList.remove("main-nav__nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__closed")) {
    navMain.classList.remove("main-nav__closed");
    navMain.classList.add("main-nav__opened");
  } else {
    navMain.classList.add("main-nav__closed");
    navMain.classList.remove("main-nav__opened");
  }
});

navToggle.addEventListener("click", function () {
  if (navOff.classList.contains("main-nav__closed")) {
    navOff.classList.remove("main-nav__closed");
    navOff.classList.add("main-nav__opened");
  } else {
    navOff.classList.add("main-nav__closed");
    navOff.classList.remove("main-nav__opened");
  }
});

var modal = document.querySelector(".popup-cart");
var modal_wrapper = document.querySelector(".popup-cart__wrapper");
var modal_btn = document.querySelector(".popup-cart__button");

var btn = document.querySelector(".product-week__button");

var openPopUp = function () {
  modal.classList.remove("popup-cart__closed");
};

var closePopUp = function () {
  modal.classList.add("popup-cart__closed");
};

modal.addEventListener("click", function (e) {
  if (!modal_wrapper.contains(e.target)) {
    closePopUp();
  }
});
