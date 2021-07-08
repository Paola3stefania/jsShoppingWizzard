import { goToHomepage } from "./router.js";

var minutesCount = 0;

function timer() {
	let initialMins = 4;
	let secondsleft = 59;

	console.log(initialMins);

	var crono = setInterval(function () {
		let minutesLeft = initialMins - minutesCount;

		if (secondsleft == 0) {
			secondsleft = 59;
		} else {
			console.log(secondsleft);
			secondsleft = secondsleft - 1;
		}

		document.getElementById("timer").innerHTML =
			"0" + minutesLeft + " : " + secondsleft;

		if (minutesLeft == 0 && secondsleft == 0) {
			clearInterval(crono);
		}
	}, 1000);

	var idleInterval = setInterval(timerIncrement, 60000); // cada un minuto entra a la funcion timerincrement y suma 1 min
	minutesCount = 0;
}

function timerIncrement() {
	minutesCount += 1;
	console.log(minutesCount);
	if (minutesCount > 4) {
		// 5 minutes
		location.reload();
	}
}

export { timer };
