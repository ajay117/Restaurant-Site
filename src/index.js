import "./assets/stylesheets/normalize.css";
import "./assets/stylesheets/styles.css";
import addHome from "./modules/home";

addHome();

window.addEventListener("DOMContentLoaded", () => {
  let intro = document.querySelector(".intro");
  intro.classList.add("animate");
});
