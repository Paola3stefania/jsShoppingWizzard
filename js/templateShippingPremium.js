import { wrapper } from "./main.js";
import {  goToFinish } from "./router.js";

let shippingPrHtml = `
<template id="shippingPremium">
  <div class="main-wrapper">
    <header>
      <h1 class="main-title">Step 3 - Shipping - Premium</h1>
      <div class="shopping-bar">
        <div class="line"></div>
        <ul class="text-progress">
          <li><strong>Profile</strong></li>
          <li><strong>Address</strong></li>
          <li><strong>Shoping</strong></li>
          <li><strong>Finish</strong></li>
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
        <form action="">
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
            <div class="--hide">
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
          <div id="buttons" class="buttons">
            <input type="reset" id="clear" name="clear" value="Clear Form" class="buttons main-button" />
            <input type="submit" id="next" name="next" value="Next" class="buttons sec-button button-next" />
          </div>
        </form>
      </div>
      <div class="timer"></div>
    </main>
  </div>
</template>
`;

function shippingPremium() {
    wrapper.innerHTML = "";
    wrapper.insertAdjacentHTML("beforeend", shippingPrHtml);

    let shipping = document.getElementById("shippingPremium").content;
    let copyShipping = document.importNode(shipping, true);

    wrapper.appendChild(copyShipping);
    document.querySelector(".button-next").addEventListener("click", goToFinish);

    wrapper.insertAdjacentHTML("beforeend", shippingPrHtml);
}

export { shippingPremium };