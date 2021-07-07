import { wrapper } from './main.js'
import { goToBuy } from './router.js'

let shipping = `
<template id="shipping">
<div class="main-wrapper">
  <article class="inner-container">
    <header>
      <h1 class="main-title">Step 3 - Shipping</h1>
      <div id="shopping_bar">
        <div class="line"></div>
        <ul class="text_progress">
          <li><strong>Profile</strong></li>
          <li><strong>Address</strong></li>
          <li><strong>Shoping</strong></li>
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
    </header>
    <main id="main_content">
      <div id="form_content">
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

            <div>
              <input type="checkbox" id="gift" name="gift" checked />
              <label for="gift">Is it a gift?</label>
            </div>
            <div>
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

          <button type="reset" class="buttons main_button">Clear form</button>
          <button type="submit" class="buttons sec_button">Next</button>
        </form>
      </div>
      <div id="timer"></div>
    </main>
  </article>
</div>
</template>
`

function shipping() {
  wrapper.insertAdjacentHTML('beforeend', shipping)

  let shipping = document.getElementById('shipping').content
  let copyShipping = document.importNode(shipping, true)

  wrapper.appendChild(copyShipping)
  document.querySelector('.finish__button').addEventListener('click', goToBuy)

  wrapper.insertAdjacentHTML('beforeend', shipping)
}

export { shipping }
