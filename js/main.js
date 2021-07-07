//TODO fix the js import
//import productHtml from "templateProduct.js";

import { navigate } from "./router.js";

window.addEventListener("hashchange", navigate);
var wrapper = document.getElementById("app");

navigate();

//! Functions

export { wrapper };
