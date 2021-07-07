import { wrapper, goToBuy, goToHomepage } from "./main.js";

function buy() {
	if (wrapper.innerHTML != "") {
		//remove event Listener before deleting de node
		document
			.querySelector(".product__button")
			.removeEventListener("click", goToBuy);

		wrapper.innerHTML = "";

		//wrapper(nodoToRemove);

		let buy = document.getElementById("form").content;
		let copyBuy = document.importNode(buy, true);

		wrapper.appendChild(copyBuy);
	} else {
		goToHomepage();
	}
}

export { buy };
