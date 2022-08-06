import addNav from "./nav";
import backArrow from "../assets/images/arrow-left.svg";
import addMainDish from "./mainDish";

//objIndex is the index of individual dish..
export default function addDishDescription(obj) {
  let contentDiv = document.querySelector(".content");

  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }

  let div = document.createElement("div");
  let heading = document.createElement("h3");
  let img = document.createElement("img");
  let para = document.createElement("p");
  let btn = document.createElement("button");
  let backArrowImg = document.createElement("img");

  backArrowImg.setAttribute("src", backArrow);
  backArrowImg.setAttribute("alt", "");
  backArrowImg.classList.add("back-arrow");
  backArrowImg.addEventListener("click", () => {
    addMainDish();
  });

  heading.textContent = obj.name;
  heading.classList.add("description-heading");

  img.setAttribute("src", obj.src);
  img.setAttribute("alt", `Picture of ${obj.name}`);

  para.textContent = obj.description;
  para.classList.add("description-para");

  btn.textContent = `Order Now: ${obj.price}`;
  btn.classList.add("btn-order");
  btn.addEventListener("click", (e) => {
    alert("We will add payment method soon!");
    e.stopPropagation();
  });

  img.classList.add("box-img");
  div.classList.add("box-description");
  setTimeout(() => {
    div.classList.add("opaque");
  }, 100);

  div.appendChild(heading);
  div.appendChild(img);
  div.appendChild(para);
  div.appendChild(btn);

  contentDiv.appendChild(addNav());
  let nav = document.querySelector("nav");
  nav.prepend(backArrowImg);

  contentDiv.appendChild(div);
}
