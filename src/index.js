import init from "./module";
import "./styles/main.scss";
import webpackLogo from "./assets/webpackLogo.png";

const logo = document.getElementById("logo");
logo.src = webpackLogo;

console.log("index.js file");
console.log(init());
