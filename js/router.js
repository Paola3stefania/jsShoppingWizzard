import { product } from "./templateProduct.js";
import { buy } from "./templateBuy.js";
import { shipping } from "./templateShipping.js";
import { address } from "./templateAddress.js";
import { finish } from "./templateFinish.js";
//TODO import thank you

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
  } else if (location.hash === "#finish") {
    finish();
  } else if (location.hash === "#thank-you") {
    thankYou();
  }
}

function goToBuy(event) {
  event.preventDefault();
  window.location.hash = "profile";
}

function goToHomepage() {
  window.location.hash = "";
}

function goToAddress() {
  window.location.hash = "address";
}

function goToShipping(event) {
  event.preventDefault();
  window.location.hash = "shipping";
}

function goToFinish() {
  window.location.hash = "finish";
}

function goToThankYou() {
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
};
