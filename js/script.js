// nav scroll
let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("nav-scroll", window.screenY > 0);
});
// Active Toggle
let AllNavLinkA = document.querySelectorAll(".nav-links li a");

AllNavLinkA.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});
//Active Remove....
const removeActive = () =>
  AllNavLinkA.forEach((item) => {
    item.classList.remove("active");
  });
//Nav Links Toggler....
let menuBars = document.querySelector("nav button");
let navlinks = document.querySelector(".nav-links");
menuBars.addEventListener("click", () => {
  navlinks.classList.toggle("nav-link-block");
});
