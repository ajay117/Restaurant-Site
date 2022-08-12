import addMenu from "./menu";
import addNav from "./nav";

export default function addHome() {
  let contentDiv = document.querySelector(".content");

  if (contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }
  let introDiv = document.createElement("div");
  let heading = document.createElement("h3");
  let para = document.createElement("p");
  let btn = document.createElement("button");

  heading.textContent = "Aj's Kitchen";
  para.textContent = "Hangout Experience with great atmosphere.";

  btn.textContent = "Explore";
  btn.classList.add('btn-info');

  btn.addEventListener("click", () => {
    addMenu();
  });

  introDiv.appendChild(heading);
  introDiv.appendChild(para);
  introDiv.appendChild(btn);

  introDiv.classList.add("intro");
  introDiv.classList.add("padded-container");

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(introDiv);
}
