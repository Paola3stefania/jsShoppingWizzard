// nuestra sección de router

window.addEventListener("hashchange", navigate);
var wrapper = document.getElementById("app");

function navigate() {
	if (location.hash === "#product" || location.hash === "") {
		product();
	} else if (location.hash === "#buy") {
		buy();
	}
}

navigate();

//! Functions

function product() {
	let product = document.getElementById("product").content;
	let copyProduct = document.importNode(product, true);

	wrapper.appendChild(copyProduct);
	document.querySelector(".product__button").addEventListener("click", goToBuy);
}

// new route
function goToBuy(event) {
	event.preventDefault();
	window.location.hash = "#buy";
}

function goToHomepage() {
	window.location.hash = "";
}

function buy() {
	let nodoToRemove = wrapper.firstElementChild;
	if (nodoToRemove) {
		//remove event Listener before deleting de node
		document
			.querySelector(".product__button")
			.removeEventListener("click", goToBuy);

		wrapper.removeChild(nodoToRemove);
		contador = 1;

		let buy = document.getElementById("form").content;
		let copyBuy = document.importNode(buy, true);

		wrapper.appendChild(copyBuy);
	} else {
		goToHomepage();
	}
}
