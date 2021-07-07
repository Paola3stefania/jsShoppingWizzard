import { wrapper } from "./main.js";
import { goToBuy, goToHomepage, goToAddress } from "./router.js";

let templateBuy = `<template id="form">
<div class="main-wrapper">
    <main class="inner-container">
        <div>
        <ul class="profile-progressBar">
            <li class="stage-progressBar">Profile</li>
            <li class="stage-progressBar">Address</li>
            <li class="stage-progressBar">Shipping</li>
            <li class="stage-progressBar">Finish</li>
        </ul>
        
</div>
<button class="go-next">Go Next</button>
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

		actualStage();
		document.querySelector(".go-next").addEventListener("click", goToAddress);
	} else {
		goToHomepage();
	}
}

//*TODO

//pregress bar selected

function actualStage() {
	let page = location.hash.substr(1); //removes the hash #
	let progressBarArray = document.getElementsByClassName("stage-progressBar");

	console.log("this is " + page);
	console.log(progressBarArray);

	for (const isStage of progressBarArray) {
		//console.log("this is elemento " + isStage);

		console.log(isStage.innerHTML);

		if (page === isStage.innerHTML.toLowerCase()) {
			isStage.classList.toggle("stage-progressBar-selected");
		}
	}
}

//FORMULARIO CON VALIDACION

export { buy };
