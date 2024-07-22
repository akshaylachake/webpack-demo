import webpackLogo from "./assets/webpackLogo.png";
import header from "./components/header.html";
import footer from "./components/footer.html";

const logo = document.getElementById("logo");
if (logo != null) logo.src = webpackLogo;

// attach header/footer
document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;

// header toggleMenu button
const button = document.getElementById("menu-icon");

// Add a click event listener to the button
button.addEventListener("click", () => {
  const menu = document.querySelector(".navbar .menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

export function init() {
  return "global.js";
}
