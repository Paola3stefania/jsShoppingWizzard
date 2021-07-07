//*Alert just a test

import { wrapper } from "./main.js";
import { goToBuy } from "./router.js";

function finish() {
  wrapper.insertAdjacentHTML("beforeend", finishHtml);

  let finish = document.getElementById("finish").content;
  let copyFinish = document.importNode(finish, true);

  wrapper.appendChild(copyFinish);
  document.querySelector(".finish__button").addEventListener("click", goToBuy); //TODO change goToBuy

  wrapper.insertAdjacentHTML("beforeend", finishHtml);
}

export { finish };
