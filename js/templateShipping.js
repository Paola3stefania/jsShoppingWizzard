import { wrapper } from "./main.js";
import { goToShippingPremium, goToShipping } from "./router.js";

let shippingHtml = `
<template id="shipping">
  <div class="main-wrapper">
    <header>
      <h1 class="main-title">Step 3 - Shipping</h1>
      <div class="shopping-bar">
        <div class="line"></div>
        <ul class="text-progress">
          <li class="stage-progressBar">Profile</li>
          <li class="stage-progressBar">Address</li>
          <li class="stage-progressBar">Shipping</li>
          <li class="stage-progressBar">Finish</li>
        </ul>
        <ul class="checkpoints">
          <li>
            <div class="circle checked"></div>
          </li>
          <li>
            <div class="circle checked"></div>
          </li>
          <li>
            <div class="circle checked"></div>
          </li>
          <li>
            <div class="circle"></div>
          </li>
        </ul>
      </div>
    </header>
    <main class="main-content">
      <div class="form-content">
          <section>
            <h2>Shipping</h2>
            <p>Shipping type</p>
            <p>Select a maintenance drone:</p>
            <div>
              <input
                type="radio"
                id="free"
                name="shipping"
                value="free"
                checked
              />
              <label for="free"
                >Free shipment (72H)
                <span class="bold-text">( no extra cost )</span></label
              >
            </div>

            <div>
              <input type="radio" id="extra" name="shipping" value="extra" />
              <label for="extra"
                >Extra shipping (48H)
                <span class="bold-text">( +5€ )</span></label
              >
            </div>

            <div>
              <input
                type="radio"
                id="premium"
                name="shipping"
                value="premium"
              />
              <label for="premium"
                >Premium (24h) <span class="bold-text">( +10€ )</span></label
              >
            </div>
            <input type="checkbox" id="gift" name="gift" class="toggle-gift" />
            <label for="gift">Is it a gift?</label>
            <div class="gift-fields --isVisible">
              <div class="flex-column-between">
                <label for="giftMessage">Gift message</label>
                <textarea name="giftMessage" maxlength="200">Your message here</textarea
                >
              </div>
              <div>
                <label for="gifImage">Gift wrapper image</label>
                <input
                  type="file"
                  id="giftImage"
                  name="giftImage"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
          </section>
          <div id="buttons" class="buttons-profile">
            <input type="reset" id="clear" name="clear" value="Clear Form" class="clear-buttons" />
            <input type="submit" id="next" name="next" value="Next" class="submit-buttons go-next" />
          </div>
      </div>
      <div id="timer" class="timer"></div>
    </main>
  </div>
</template>
`;

function shipping() {
	document.querySelector(".go-next").removeEventListener("click", goToShipping);

	wrapper.innerHTML = "";
	wrapper.insertAdjacentHTML("beforeend", shippingHtml);

	let shipping = document.getElementById("shipping").content;
	let copyShipping = document.importNode(shipping, true);

	wrapper.innerHTML = "";
	wrapper.appendChild(copyShipping);

	actualStage();

	document
		.querySelector(".go-next")
		.addEventListener("click", goToShippingPremium);

	wrapper.insertAdjacentHTML("beforeend", shippingHtml);
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

export { shipping };
