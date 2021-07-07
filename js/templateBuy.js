import { wrapper } from "./main.js";
import { goToBuy, goToHomepage, goToAddress } from "./router.js";

let templateBuy = `
<template id="form">
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

					<div>
							<form action="" method="post">
									<ul>
									<li>
									<label for="name">UserName:</label>
									<input type="text" id="name" name="user_name">
									</li>
									<li>
									<label for="mail">Email:</label>
									<input type="email" id="mail" name="user_email">
									</li>
									<li>
											<label for="user-pwd">Password</label>
											<input type="password" name="user-password" id="user-pwd">
									</li>
									<li>
											<label for="conf-user-pwd">Confirm Password</label>
											<input type="password" name="conf-user-password" id="conf-user-pwd">
									</li>
									<li class="button">
											<button type="submit" value="Submit">Send your message</button>
									</li>
									<li class="button">
											<button type="reset" value="Reset">Reset All</button>
									</li>
									</ul>
							</form>
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

		wrapper.innerHTML = ""; //Deletes everything

		wrapper.insertAdjacentHTML("beforeend", templateBuy);

		let buy = document.getElementById("form").content;
		let copyBuy = document.importNode(buy, true);
		wrapper.appendChild(copyBuy);

		actualStage(); //after inserting the node, check stage and toggle class css to selected

		document.querySelector(".go-next").addEventListener("click", goToAddress);
	} else {
		goToHomepage();
	}
}

function actualStage() {
	let page = location.hash.substr(1); //removes the hash #
	let progressBarArray = document.getElementsByClassName("stage-progressBar");

	for (const isStage of progressBarArray) {
		if (page === isStage.innerHTML.toLowerCase()) {
			isStage.classList.toggle("stage-progressBar-selected");
		}
	}
}

//*TODO
//FORMULARIO CON VALIDACION

export { buy };
