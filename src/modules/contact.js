import addNav from "./nav";

export default function addContact() {
  let contentDiv = document.querySelector(".content");
  
  if(contentDiv.innerHTML) {
    contentDiv.innerHTML = "";
  }
  let div = document.createElement("div");
  div.textContent = "Contact Page";

  contentDiv.appendChild(addNav());
  contentDiv.appendChild(div);
}
