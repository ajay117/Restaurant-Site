import addNav from "./nav";

export default function addMenu() {
  let contentDiv = document.querySelector(".content");
  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }

  let menuContainer = document.createElement("div");
  let heading = document.createElement("h3");
  let menu = ["Main", "Appetizer", "Drinks", "Dessert"];
  let ul = document.createElement("ul");

  heading.textContent = "Category";

  menu.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  menuContainer.classList.add("container-menu");

  menuContainer.appendChild(heading);
  menuContainer.appendChild(ul);

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(menuContainer);
}
