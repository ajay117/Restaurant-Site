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
  para.textContent = "Hangout Experience with great atmosphere";

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

  // contentDiv.innerHTML =
  //   '<div class="video-container"><iframesrc="https://www.youtube.com/embed/f7MHvMsDnPM?controls=0&autoplay=1&mute=1&playlist=f7MHvMsDnPM&loop=1"></iframe></div><div class="content"></div>';

  // contentDiv.appendChild(addVideoBackground());
  contentDiv.appendChild(addNav());
  contentDiv.appendChild(introDiv);
}
