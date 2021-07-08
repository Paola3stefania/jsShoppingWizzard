import { wrapper } from "./main.js";
import { goToBuy, goToHomepage, goToAddress } from "./router.js";

//template

let templateBuy = `
<template id="form">
<div class="main-wrapper">
	<div>
		<h1>Step 1 - Profile</h1>
		<div id="shopping-bar" class="shopping-bar">
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
				<h2>Profile</h2>
				<form id="profile-form" action="" method="post">
					<ul>
						<li>
							<label for="name">UserName: </label>
							<input class="input-profile" type="text" id="name" name="user_name" required />
						</li>
						<li>
							<label for="mail">Email: </label>
								
								<input
									type="email"
									class="input-profile"
									id="profile-mail"
									name="user_email"
									required
								/>
								<span class="email-error" aria-live="polite"></span>
							
						</li>
						<li>
							<label for="user-pwd">Password: </label>
							<input
								type="password"
								class="input-profile"
								name="user-password"
								id="profile-user-pwd"
								required
							/>
							<span class="pwd-error" aria-live="polite"></span>
						</li>
						<li>
							<label for="conf-user-pwd">Confirm Password: </label>
							<input
								type="password"
								class="input-profile"
								name="conf-user-password"
								id="conf-user-pwd"
								required
							/>
							<span class="pwd-conf-error" aria-live="polite"></span>
						</li>
						<div id="buttons" class="buttons-profile">
							<input
								type="reset"
								id="clear"
								class="profile-submit-buttons input-profile"
								name="clear"
								value="Clear All"
							/>
							<input
								type="submit"
								id="next"
								name="next"
								value="Next"
								class="go-next profile-submit-buttons input-profile"
							/>
						</div>
					</ul>
				</form>
			</div>
			<div id="timer" class="timer"></div>
		</main>
	</div>
</div>
</template>`;

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
	if (emailOk && confOk && passOk) {
		goToAddress();
	}
}

//checkvalidation
let emailOk = false;
let confOk = false;
let passOk = false;

function validateProfile() {
	//FORMULARIO CON VALIDACION - REGEX

	let regExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	/*
		/^
		(?=.*\d)          should contain at least one digit
		(?=.*[a-z])       should contain at least one lower case
		(?=.*[A-Z])       should contain at least one upper case
		[a-zA-Z0-9]{8,}   should contain at least 8 from the mentioned characters
		$/
	*/

	let regExpEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	//email
	const email = document.getElementById("profile-mail");
	const emailError = document.querySelector(".email-error");

	email.addEventListener("change", function () {
		const test = regExpEmail.test(email.value);

		if (test) {
			emailError.innerHTML = "";
			email.classList.add("valid");
			email.classList.remove("invalid");
			emailOk = true;
		} else {
			email.classList.remove("valid");
			email.classList.add("invalid");
			emailError.innerHTML = "Insert valid email";
			emailOk = false;
		}
	});

	//Pass
	const userPwd = document.getElementById("profile-user-pwd");
	const pwdError = document.querySelector(".pwd-error");

	userPwd.addEventListener("change", function () {
		const test = regExpPass.test(userPwd.value);

		if (test) {
			pwdError.innerHTML = "";
			userPwd.classList.add("valid");
			userPwd.classList.remove("invalid");
			passOk = true;
		} else {
			userPwd.classList.remove("valid");
			userPwd.classList.add("invalid");
			pwdError.innerHTML =
				"Insert , 8-15 char puede contener numeros, al menos una mayuscula, al mneos una min";
			passOk = false;
		}
	});

	//Confirm Pass
	const confUserPwd = document.getElementById("conf-user-pwd");
	const confPwdError = document.querySelector(".pwd-conf-error");

	confUserPwd.addEventListener("change", function () {
		const test = userPwd.value == confUserPwd.value;

		if (test) {
			confPwdError.innerHTML = "";
			confUserPwd.classList.add("valid");
			confUserPwd.classList.remove("invalid");
			confOk = true;
		} else {
			confUserPwd.classList.remove("valid");
			confUserPwd.classList.add("invalid");
			confPwdError.innerHTML = "Both passwords should match";
			confOk = false;
		}
	});
}

export { buy };

/*
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
                    <div class="circle"></div>
                </li>
                <li>
                    <div class="circle"></div>
                </li>
                <li>
                    <div class="circle"></div>
                </li>
            </ul>
            </div> */
