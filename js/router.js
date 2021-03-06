import { product } from "./templateProduct.js";
import { buy } from "./templateBuy.js";
import { address } from "./templateAddress.js";
import { shipping } from "./templateShipping.js";
import { shippingPremium } from "./templateShippingPremium.js";
import { finish } from "./templateFinish.js";
import { timer } from "./timer.js";
//TODO import { thankYou } from "./templateThankYou.js";

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
	} else if (location.hash === "#shipping-premium") {
		shippingPremium();
	} else if (location.hash === "#finish") {
		finish();
	} else if (location.hash === "#thank-you") {
		thankYou();
	}
}

function goToBuy(event) {
	event.preventDefault();
	window.location.hash = "profile";
	timer();
}

function goToHomepage() {
	window.location.hash = "";
}

function goToAddress() {
	event.preventDefault();
	window.location.hash = "address";
}

function goToShipping() {
	event.preventDefault();
	window.location.hash = "shipping";
}

function goToShippingPremium() {
	event.preventDefault();
	window.location.hash = "shipping-premium";
}

function goToFinish() {
	event.preventDefault();
	window.location.hash = "finish";
}

function goToThankYou() {
	event.preventDefault();
	window.location.hash = "thank-you";
}
export {
	navigate,
	goToHomepage,
	goToBuy,
	goToAddress,
	goToShipping,
	goToFinish,
	goToThankYou,
	goToShippingPremium,
};
