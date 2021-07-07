import { product } from "./templateProduct.js";
import { buy } from "./templateBuy.js";

function navigate() {
	if (
		location.hash === "#product" ||
		location.hash === "" ||
		location.hash === "#"
	) {
		product();
	} else if (location.hash === "#profile") {
		buy();
	}
}

function goToBuy(event) {
	event.preventDefault();
	window.location.hash = "#profile";
}

function goToHomepage() {
	window.location.hash = "";
}
function goToAddress() {
	window.location.hash = "address";
}

export { navigate, goToHomepage, goToBuy, goToAddress };
