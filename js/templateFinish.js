import { wrapper } from "./main.js";
import { goToHomepage, goToThankYou } from "./router.js";

let finishHtml = `
<template id="finish">
	<div>
		<h1>Your purchase</h1>
		<div>
			<img>
		</div>
		<div>
			<h2>Brown t-shirt</h2>
			<p>Size: <strong>M</strong></p>
			<p>Color: </p>
			<p>Estimate delivery date:</p>
			<p>Between</p>
			<p>and</p>
		</div>
		<form action="">
			<imput type="checkbox" id="terms" name="terms" value="Terms and conditions">
			<label for="terms">I have read and I accept the terms and conditions.</label>
			<input type="submit" value="Buy Now">
		</form>
	</div>
	<div>
		<p>Your order</p>
		<hr>
		<p id="product"></p>
		<p id="shipping"></p>
		<hr>
		<p id="total"></p>
	</div>
</template>
`;

function finish() {
<<<<<<< HEAD
    wrapper.insertAdjacentHTML("beforeend", finishHtml);
=======
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", finishHtml);
>>>>>>> e10da88a0e5d048900080d18981bc52c09aafc2a

    let finish = document.getElementById("finish").content;
    let copyFinish = document.importNode(finish, true);

<<<<<<< HEAD
    wrapper.appendChild(copyFinish);
    document.querySelector(".finish__button").addEventListener("click", goToBuy); //TODO change goToBuy
=======
  wrapper.appendChild(copyFinish);
  document
    .querySelector(".finish__button")
    .addEventListener("click", goToThankYou);
>>>>>>> e10da88a0e5d048900080d18981bc52c09aafc2a

    wrapper.insertAdjacentHTML("beforeend", finishHtml);
}

export { finish };