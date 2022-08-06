import addNav from "./nav";

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
  let button = document.createElement("button");

  heading.textContent = obj.name;
  heading.classList.add("description-heading");

  img.setAttribute("src", obj.src);
  img.setAttribute("alt", `Picture of ${obj.name}`);

  para.textContent = obj.description;
  para.classList.add("description-para");

  button.textContent = `Order Now: ${obj.price}`;

  img.classList.add("box-img");
  div.classList.add("box-description");

  div.appendChild(heading);
  div.appendChild(img);
  div.appendChild(para);
  div.appendChild(button);

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(div);
}
