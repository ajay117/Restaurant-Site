import "./assets/stylesheets/normalize.css";
import "./assets/stylesheets/styles.css";

import addNav from "./modules/nav";
import introContainer from "./modules/intro";

// Import Modules


let contentDiv = document.querySelector('.content');

contentDiv.appendChild(addNav());
contentDiv.appendChild(introContainer());