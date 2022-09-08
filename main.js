let errormessage = "";

const form = document.querySelector("form");
const usernameInput = form.username;
const emailInput = form.email;
const messageInput = form.message;

const errormessageP = document.querySelector("#error");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	errormessageP.innerHTML = "";

	let email = emailInput.value;
	let username = usernameInput.value;
	let message = messageInput.value;

	message.trim();
	email.trim();
	username.trim();

	email = email.toLowerCase();

	let emailarr = email.split("@");

	if (emailarr[1] != "cphbusiness.dk") {
		errormessage = "Not cph mail";
		errormessageP.innerHTML = errormessage;
		return;
	}

	if (username == "" || email == "" || message == "") {
		errormessage = "Empty fields";
		errormessageP.innerHTML = errormessage;
		return;
	}

	if (message.length < 7) {
		errormessage = "Message length";
		errormessageP.innerHTML = errormessage;
		return;
	}

	const day = new Date().getDay();

	if (day == 0 || day > 4) {
		errormessage = "Not today";
		errormessageP.innerHTML = errormessage;
		return;
	}
});

/*
let somethingwrong = true;

console.log("Before function");

if (somethingwrong) {
	console.log("Something is wrong");
}

console.log("After function");

return;

console.log("hello");
*/
