import addNav from "./nav";

export default function addAbout() {
  let contentDiv = document.querySelector(".content");

  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }
  let div = document.createElement("div");
  div.textContent = "About Page";

  div.classList.add("padded-container");

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(div);
}
