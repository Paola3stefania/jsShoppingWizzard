//TODO fix the js import
//import productHtml from "templateProduct.js";

import { product } from "./templateProduct.js";
import { buy } from "./templateBuy.js";

// nuestra sección de router

window.addEventListener("hashchange", navigate); //to check if the hashtag changes
var wrapper = document.getElementById("app");

function navigate() {
	if (
		location.hash === "#product" ||
		location.hash === "" ||
		location.hash === "#"
	) {
		product();
	} else if (location.hash === "#buy") {
		buy();
	}
}

navigate();

//! Functions

// new route
function goToBuy(event) {
	event.preventDefault();
	window.location.hash = "#buy";
}

function goToHomepage() {
	window.location.hash = "";
}

export { wrapper, goToBuy, goToHomepage };
