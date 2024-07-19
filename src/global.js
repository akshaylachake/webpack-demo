import webpackLogo from "./assets/webpackLogo.png";

const logo = document.getElementById("logo");
logo.src = webpackLogo;

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("./components/navbar.html", "navbar");
});

function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

function init() {
  return "global.js file";
}

export default init;
