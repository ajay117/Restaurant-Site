import addNav from "./nav";

import { dessertAndDrinks } from "../menuObj/dessertAndDrinks";
import addDishDescription from "./aboutDish";
import backArrow from "../assets/images/arrow-left.svg";
import addMenu from "./menu";

export default function addDrinksAndDessert() {
  let contentDiv = document.querySelector(".content");

  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }

  let parentDiv = document.createElement("div");
  let heading = document.createElement("h3");
  let backArrowImg = document.createElement("img");

  backArrowImg.setAttribute("src", backArrow);
  backArrowImg.setAttribute("alt", "");
  backArrowImg.classList.add("back-arrow");
  backArrowImg.addEventListener('click', () => {
    addMenu();
  })

  parentDiv.appendChild(heading);

  dessertAndDrinks.forEach((dishObj) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let btn = document.createElement("button");

    // heading.textContent = "Main Dish";
    heading.classList.add("padded-container");
    heading.classList.add("mt-md");

    img.src = dishObj.src;
    img.alt = "";
    img.classList.add("responsive");

    title.textContent = dishObj.name;
    title.classList.add("dish-name");

    btn.textContent = `Order Now: Rs. ${dishObj.price}`;
    btn.classList.add("btn-order");
    btn.addEventListener("click", (e) => {
      alert("We will add payment method soon!");
      e.stopPropagation();
    });

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(btn);

    div.classList.add("box");
    div.classList.add("padded-container");

    div.addEventListener("click", () => {
      addDishDescription(dishObj);
    });

    parentDiv.classList.add("box-container");
    parentDiv.appendChild(div);
    setTimeout(() => {
      parentDiv.classList.add("opaque");
    }, 100);
  });

  //   parentDiv.classList.add("padded-container")
  contentDiv.appendChild(addNav());

  let nav = document.querySelector("nav");
  nav.prepend(backArrowImg);
  contentDiv.appendChild(heading);
  contentDiv.appendChild(parentDiv);
}
