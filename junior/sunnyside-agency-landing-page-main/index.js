let hamburger = document.querySelector(".js-hamburger");
let mobileMenu = document.querySelector(".js-mobile-menu");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
  } else {
    hamburger.classList.add("is-active");
    mobileMenu.classList.add("is-open");
  }
});
