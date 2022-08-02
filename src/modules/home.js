import addNav from "./nav";

export default function addHome() {
  let contentDiv = document.querySelector(".content");
  
  if(contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }
  let introDiv = document.createElement("div");
  let heading = document.createElement("h3");
  let para = document.createElement("p");

  heading.textContent = "Lorem ipsum dolor sit amet";
  para.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

  introDiv.appendChild(heading);
  introDiv.appendChild(para);
  introDiv.classList.add("intro");
  introDiv.classList.add("padded-container");

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(introDiv);
}
