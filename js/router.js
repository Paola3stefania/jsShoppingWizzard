import { product } from "./templateProduct.js";
import { buy } from "./templateBuy.js";
import { shipping } from "./templateShipping.js";
import { address } from "./templateAddress.js";

function navigate() {
	if (
		location.hash === "#product" ||
		location.hash === "" ||
		location.hash === "#"
	) {
		product();
	} else if (location.hash === "#profile") {
		buy();
	} else if (location.hash === "#address") {
		address();
	} else if (location.hash === "#shipping") {
		shipping();
	}
}

function goToBuy(event) {
	event.preventDefault();
	window.location.hash = "profile";
}

function goToHomepage() {
	window.location.hash = "";
}

function goToAddress(event) {
	event.preventDefault();
	window.location.hash = "address";
}

function goToShipping(event) {
	event.preventDefault();
	window.location.hash = "shipping";
}

export { navigate, goToHomepage, goToBuy, goToAddress, goToShipping };
