//TODO fix the js import
//import productHtml from "templateProduct.js";

//*Alert just a test

let productHtml = `
<template id="product">
  <div class="main-wrapper">
    <main class="inner-container">
      <article class="display-flex">
        <section class="display-flex padding-y-2">
          <ul class="product-info__thumbnails">
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="product-info__thumbnail"
              />
            </li>
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="product-info__thumbnail"
              />
            </li>
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="product-info__thumbnail"
              />
            </li>
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="product-info__thumbnail"
              />
            </li>
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="product-info__thumbnail"
              />
            </li>
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="
                  product-info__thumbnail product-info__thumbnail--actived
                "
              />
            </li>
            <li>
              <img
                src="assets/shoes06.jpg"
                alt=""
                class="product-info__thumbnail"
              />
            </li>
          </ul>
          <div class="product-img__wrapper">
            <div class="position-relative margin-1">
              <img src="assets/shoes06.jpg" alt="" class="product-img" />
              <p class="new-product-tag">new</p>
              <p class="light-product-tag">light</p>
            </div>
            <span class="product-img__chevron-l"></span>
            <span class="product-img__chevron-r"></span>
          </div>
        </section>
        <section class="padding-x-2">
          <div class="product-info">
            <h1 class="product-info__title">Vera W4L</h1>
            <sub>W4L-6780</sub>
            <p class="product-info__price">89,95€</p>
            <p>Color : <span class="uppercase">sappire</span></p>
            <ul class="product-info__thumbnails display-flex">
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="product-info__thumbnail"
                />
              </li>
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="product-info__thumbnail"
                />
              </li>
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="product-info__thumbnail"
                />
              </li>
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="product-info__thumbnail"
                />
              </li>
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="product-info__thumbnail"
                />
              </li>
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="
                    product-info__thumbnail product-info__thumbnail--actived
                  "
                />
              </li>
              <li>
                <img
                  src="assets/shoes06.jpg"
                  alt=""
                  class="product-info__thumbnail"
                />
              </li>
            </ul>
            <a href="#" class="product-info__link bold-text"
              >Envios y devoluciones gratis*</a
            >
          </div>
          <div class="product-size">
            <div flex-between class="padding-bottom-y-1">
              <p>Seleccione una talla</p>
              <a href="#" class="product-info__link">Guía de tallas</a>
            </div>
            <ul class="display-flex">
              <li class="product-size__item">35</li>
              <li class="product-size__item">36</li>
              <li class="product-size__item">37</li>
              <li class="product-size__item">38</li>
              <li class="product-size__item">39</li>
              <li class="product-size__item">40</li>
              <li class="product-size__item">41</li>
              <li class="product-size__item">42</li>
            </ul>
          </div>
          <a href="#buy" class="product__button">comprar</a>
        </section>
      </article>
    </main>
  </div>
</template>
`;

// let shippingForm = `

// `
// nuestra sección de router

//* Finish window

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

//! Functions

function product() {
  wrapper.insertAdjacentHTML("beforeend", productHtml);

  let product = document.getElementById("product").content;
  let copyProduct = document.importNode(product, true);

  wrapper.appendChild(copyProduct);
  document.querySelector(".product__button").addEventListener("click", goToBuy);

  wrapper.insertAdjacentHTML("beforeend", productHtml);
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
