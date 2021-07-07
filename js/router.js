import { product } from "./templateProduct.js";
import { buy } from "./templateBuy.js";

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

function goToBuy(event) {
	event.preventDefault();
	window.location.hash = "#buy";
}

function goToHomepage() {
	window.location.hash = "";
}

export { navigate, goToHomepage, goToBuy };
