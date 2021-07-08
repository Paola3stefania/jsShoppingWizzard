import { wrapper } from "./main.js";
import { goToBuy, goToHomepage, goToAddress } from "./router.js";

let templateBuy = `
<template id="form">
    <div class="main-wrapper">
    <h1>Profile</h1>
        <div id="profile-bar" class="profile-bar">
            <div class="line"></div>
                <ul class="text-progress">
                    <li class="stage-progressBar">Profile</li>
                    <li class="stage-progressBar">Address</li>
                    <li class="stage-progressBar">Shipping</li>
                    <li class="stage-progressBar">Finish</li>
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

            <main id="main-content" class="main-content">
                <div id="form-content" class="form-content">
                    <form id="profile-form" action="" method="post">
                        <ul>
                        <li>
                        <label for="name">UserName:</label>
                        <input type="text" id="name" name="user_name" required>
                        </li>
                        <li>
                        <label for="mail">Email:</label>
                        <input type="email" id="mail" name="user_email" required>
                        </li>
                        <li>
                            <label for="user-pwd">Password</label>
                            <input type="password" name="user-password" id="user-pwd" required>
                        </li>
                        <li>
                            <label for="conf-user-pwd">Confirm Password</label>
                            <input type="password" name="conf-user-password" id="conf-user-pwd" required>
                        </li>
                        <li class="buttons main-button go-next">
                            <button type="submit" value="Submit">Go Next</button>
                        </li>
                        <li class="buttons sec-button">
                        <button type="reset" value="Reset">Reset All</button>
                        </li>
                            </ul>
                        </form>
				</div>
                <div id="timer" class="timer"></div>
			</main>
		</template>
`;

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

		validateProfile();

		//Add event Listener
		document
			.querySelector("#profile-form")
			.addEventListener("submit", sendForm);
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

function sendForm(event) {
	event.preventDefault();

	goToAddress();
}
//*TODO
//FORMULARIO CON VALIDACION

let regExpPass =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-zd$@$!%*?&#.$($)$-$_]{ 8,15} $/;
let regExpEmail =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateProfile() {
	const email = document.getElementById("mail");
	email.addEventListener("change", function () {
		const test = email.value.length === 0 || regExpEmail.test(email.innerHTML);
		if (test) {
			email.className = "valid";
			error.textContent = "";
			error.className = "error";
		} else {
			email.className = "invalid";
		}
	});

	const form = document.getElementById("profile-form");

	console.log(email);
	console.log(form);
}

export { buy };

function prueba() {
	// The following is a trick to reach the next sibling Element node in the DOM
	// This is dangerous because you can easily build an infinite loop.
	// In modern browsers, you should prefer using element.nextElementSibling
	let error = email;
	while ((error = error.nextSibling).nodeType != 1);

	// As per the HTML5 Specification
	const emailRegExp =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	// Many legacy browsers do not support the addEventListener method.
	// Here is a simple way to handle this; it's far from the only one.
	function addEvent(element, event, callback) {
		let previousEventCallBack = element["on" + event];
		element["on" + event] = function (e) {
			const output = callback(e);

			// A callback that returns `false` stops the callback chain
			// and interrupts the execution of the event callback.
			if (output === false) return false;

			if (typeof previousEventCallBack === "function") {
				output = previousEventCallBack(e);
				if (output === false) return false;
			}
		};
	}

	// Now we can rebuild our validation constraint
	// Because we do not rely on CSS pseudo-class, we have to
	// explicitly set the valid/invalid class on our email field
	addEvent(window, "load", function () {
		// Here, we test if the field is empty (remember, the field is not required)
		// If it is not, we check if its content is a well-formed e-mail address.
		const test = email.value.length === 0 || emailRegExp.test(email.value);

		email.className = test ? "valid" : "invalid";
	});

	// This defines what happens when the user types in the field
	addEvent(email, "input", function () {
		const test = email.value.length === 0 || emailRegExp.test(email.value);
		if (test) {
			email.className = "valid";
			error.textContent = "";
			error.className = "error";
		} else {
			email.className = "invalid";
		}
	});

	// This defines what happens when the user tries to submit the data
	addEvent(form, "submit", function () {
		const test = email.value.length === 0 || emailRegExp.test(email.value);

		if (!test) {
			email.className = "invalid";
			error.textContent = "I expect an e-mail, darling!";
			error.className = "error active";

			// Some legacy browsers do not support the event.preventDefault() method
			return false;
		} else {
			email.className = "valid";
			error.textContent = "";
			error.className = "error";
		}
	});
}
