import upArrowIcon from "../assets/images/arrow-up-bold-outline.svg";

//This function will create scroll to top effect..
//param[node] -- node is an element which will be scrolled to the top
//after clicking on the image element..
export default function addUpArrow(node) {
  let upArrowImg = document.createElement("img");

  upArrowImg.setAttribute("src", upArrowIcon);
  upArrowImg.setAttribute("alt", "");
  upArrowImg.setAttribute("href", "#brand-name");

  upArrowImg.classList.add("arrow-up");

  upArrowImg.addEventListener("click", () => {
    node.scrollIntoView({ behavior: "smooth" });
  });
  return upArrowImg;
}
