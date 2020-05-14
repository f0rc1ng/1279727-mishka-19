var navMain = document.querySelector(".site-list");
var navToggle = document.querySelector(".main-nav__toggle");
var navOff = document.querySelector(".user-list");

navMain.classList.remove("main-nav--nojs");
navOff.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

navToggle.addEventListener("click", function () {
  if (navOff.classList.contains("main-nav--closed")) {
    navOff.classList.remove("main-nav--closed");
    navOff.classList.add("main-nav--opened");
  } else {
    navOff.classList.add("main-nav--closed");
    navOff.classList.remove("main-nav--opened");
  }
});
