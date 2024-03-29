import menuImg from "../assets/images/menu.svg";
import closeImg from "../assets/images/close.svg";
import addMenu from "./menu";
import addAbout from "./about";
import addHome from "./home";
import addContact from "./contact";

export default function addNav() {
  let nav = document.createElement("nav");
  let brandNameDiv = document.createElement("div");
  let hamburgerDiv = document.createElement("div");
  let menuItemDiv = document.createElement("div");
  let ul = document.createElement("ul");
  let hamburgerImage = new Image();
  let closeBtnImage = new Image();
  let listCloseBtn = document.createElement("li");
  let listHome = document.createElement("li");
  let listMenu = document.createElement("li");
  let listAbout = document.createElement("li");
  let listContact = document.createElement("li");

  hamburgerImage.src = menuImg;
  hamburgerImage.alt = "";
  hamburgerImage.classList.add("hamburger");

  closeBtnImage.src = closeImg;
  closeBtnImage.alt = "";
  closeBtnImage.classList.add("close-btn");

  nav.classList.add("mt-sm");
  nav.classList.add("padded-container");
  nav.classList.add("flex");
  brandNameDiv.classList.add("brand-name");
  menuItemDiv.classList.add("menu-item");
  ul.classList.add("padded-container");
  ul.classList.add("nav-link-container");

  brandNameDiv.textContent = "Aj's Kitchen";
  hamburgerDiv.appendChild(hamburgerImage);

  listCloseBtn.classList.add("align-right");
  listCloseBtn.appendChild(closeBtnImage);
  ul.appendChild(listCloseBtn);

  listHome.innerHTML = '<a href="#">HOME</a>';
  listMenu.innerHTML = '<a href="#">MENU</a>';
  listAbout.innerHTML = '<a href="#">ABOUT</a>';
  listContact.innerHTML = '<a href="#">CONTACT</a>';

  let homeLink = listHome.querySelector("a");
  let menuLink = listMenu.querySelector("a");
  let aboutLink = listAbout.querySelector("a");
  let contactLink = listContact.querySelector("a");

  ul.appendChild(listHome);
  ul.appendChild(listMenu);
  ul.appendChild(listAbout);
  ul.appendChild(listContact);

  menuItemDiv.appendChild(ul);

  nav.appendChild(brandNameDiv);
  nav.appendChild(hamburgerDiv);
  nav.appendChild(menuItemDiv);

  brandNameDiv.addEventListener("click", () => {
    addHome();
  });

  hamburgerImage.addEventListener("click", () => {
    menuItemDiv.classList.add("show-menu");
  });
  closeBtnImage.addEventListener("click", (e) => {
    menuItemDiv.classList.remove("show-menu");
    //   nav.classList.remove('hide');
  });

  homeLink.addEventListener("click", () => {
    addHome();
  });

  menuLink.addEventListener("click", () => {
    addMenu();
  });

  aboutLink.addEventListener("click", () => {
    addAbout();
  });

  contactLink.addEventListener("click", () => {
    addContact();
  });

  return nav;
}
