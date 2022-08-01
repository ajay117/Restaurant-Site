import "./assets/stylesheets/normalize.css";
import "./assets/stylesheets/styles.css";
import introContainer from "./modules/intro";

// Import Modules

import addNav from "./modules/nav";

let contentDiv = document.querySelector('.content');

contentDiv.appendChild(addNav());
contentDiv.appendChild(introContainer());