import { wrapper } from "./main.js";
import { goToHomepage, goToThankYou } from "./router.js";

let finishHtml = `
<template id="finish">
	<div>
		<div id="shopping-bar" class="shopping-bar">
			<div class="line"></div>
			<ul class="text-progress">
				<li><strong>Profile</strong></li>
				<li><strong>Address</strong></li>
				<li><strong>Shipping</strong></li>
				<li><strong>Finish</strong></li>
			</ul>
			<ul class="checkpoints">
				<li>
					<div class="circle"></div>
				</li>
				<li>
					<div class="circle"></div>
				</li>
				<li>
					<div class="circle"></div>
				</li>
				<li>
					<div class="circle"></div>
				</li>
			</ul>
		</div>
	</div>
    <main id="main-content" class="main-content">
        <div id="form-content" class="form-content">
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
					<input type="submit" value="Buy Now" class="buttons main-button>
				</form>
			</div>
		</div>
    </main>
	<div>
		<p>Your order</p>
		<hr>
		<p id="product">product</p>
		<p id="shipping">shipping</p>
		<hr>
		<p id="total">total</p>
	</div>
	<div id="timer" class="timer"></div>



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