export default function addMenu() {
  let menuContainer = document.createElement("div");
  let menu = ["Main", "Appetizer", "Drinks", "Dessert"];
  let ul = document.createElement("ul");

  menu.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  menuContainer.appendChild(ul);
  return menuContainer;
}
