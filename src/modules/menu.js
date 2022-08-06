import addAppetizer from "./appetizer";
import addDrinksAndDessert from "./drinksAndDessert";
import addMainDish from "./mainDish";
import addNav from "./nav";

export default function addMenu() {
  let contentDiv = document.querySelector(".content");
  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }

  let menuContainer = document.createElement("div");
  let heading = document.createElement("h3");
  let menu = ["Main", "Appetizer", "Drinks & Dessert"];
  let ul = document.createElement("ul");

  heading.textContent = "Our Services:-";

  menu.forEach((item) => {
    let li = document.createElement("li");
    let navLink = document.createElement("a");
    navLink.textContent = item;
    navLink.href = "#";

    if (item === "Main") {
      navLink.addEventListener("click", () => {
        addMainDish();
      });
    }
    if (item === "Appetizer") {
      navLink.addEventListener("click", () => {
        addAppetizer();
      });
    }
    if (item === "Drinks & Dessert") {
      //This is a class name for "Drinks and Dessert"
      item = "drinks";
      navLink.addEventListener("click", () => {
        addDrinksAndDessert();
      });
    }
    navLink.classList.add(item.toLowerCase());
    li.appendChild(navLink);
    ul.appendChild(li);
  });

  menuContainer.classList.add("container-menu");
  menuContainer.classList.add("animate-left");

  menuContainer.appendChild(heading);
  menuContainer.appendChild(ul);

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(menuContainer);
}
