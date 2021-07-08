import { navigate } from "./router.js";

window.addEventListener("hashchange", navigate);
var wrapper = document.getElementById("app");

navigate();

export { wrapper };
