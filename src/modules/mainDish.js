import addNav from "./nav";

import { mainDishes } from "../menuObj/mainDishes";

export default function addMainDish() {
  let contentDiv = document.querySelector(".content");

  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }

  let parentDiv = document.createElement("div");
  let heading = document.createElement("h3");

  parentDiv.appendChild(heading);

  mainDishes.forEach((one) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("p");

    heading.textContent = "Main Dish";
    heading.classList.add("padded-container");
    heading.classList.add("mt-md");

    img.src = one.src;
    img.alt = "";
    img.classList.add("responsive");

    title.textContent = one.name;
    title.classList.add("dish-name");

    price.textContent = `Rs. ${one.price}`;
    price.classList.add("dish-price");

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);

    div.classList.add("box");
    div.classList.add("padded-container");

    parentDiv.classList.add("box-container");
    parentDiv.appendChild(div);
  });

  //   parentDiv.classList.add("padded-container")
  contentDiv.appendChild(addNav());
  contentDiv.appendChild(heading);
  contentDiv.appendChild(parentDiv);
}
