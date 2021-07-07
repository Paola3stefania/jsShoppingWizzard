import { wrapper } from "./main.js";
import { goToBuy, goToHomepage } from "./router.js";

let templateBuy = `<template id="form">
<div class="main-wrapper">
    <main class="inner-container">
        Container
        <p>buy something form</p>
    </main>
</div>
</template>`;

function buy() {
	if (wrapper.innerHTML != "") {
		//remove event Listener before deleting de node
		document
			.querySelector(".product__button")
			.removeEventListener("click", goToBuy);

		wrapper.innerHTML = "";

		wrapper.insertAdjacentHTML("beforeend", templateBuy);

		let buy = document.getElementById("form").content;
		let copyBuy = document.importNode(buy, true);
		wrapper.appendChild(copyBuy);
		document
			.querySelector(".product__button")
			.addEventListener("click", goToAddress);
	} else {
		goToHomepage();
	}
}

export { buy };
