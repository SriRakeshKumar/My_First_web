const overlay = document.querySelector(".overlay");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const header2 = document.querySelector(".header__links");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    header2.classList.add("hide-for-mobile");
  } else {
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    header2.classList.remove("hide-for-mobile");
  }
});
