"use strict";
const navbar = document.querySelector(".navbar");
const button = document.querySelector(".navbar__menu");
const input = document.querySelector(".navbar__menu--btn");
const navbarWidthDefault = "5%";
let navbarWidth = false;
if (!navbarWidth) input.checked = false;
button.addEventListener("click", () => {
  navbarWidth = navbarWidth ? false : true;
  if (navbarWidth) {
    input.checked = true;
    navbar.style.width = "20%";
  } else {
    input.checked = false;
    navbar.style.width = navbarWidthDefault;
  }
});
