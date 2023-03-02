// the actual 'trigger' function
const trigger = (el, etype, custom) => {
	const evt = custom ?? new Event(etype, { bubbles: true });
	el.dispatchEvent(evt);
};

const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

nameField = document.getElementById("nameInput");
phoneField = document.getElementById("phoneInput");
emailField = document.getElementById("emailInput");
subscribeButton = document.getElementById("subscribe");

const invalidAlert = (ele, msg) => {
	ele.placeholder = msg;
	ele.style.border = "3px solid #FF9494";
	ele.style.animation = "shake 0.3s infinite";
	setTimeout(() => {
		ele.style.animation = "";
	}, 300);
};

const resetAlert = (ele) => {
	ele.style.border = "1px solid lightgray";
	ele.style.animation = "";
};

const formAlert = (e) => {
	e.preventDefault();
	
	// reset field, then check
	resetAlert(nameField);
	if (!nameField.value) {
		invalidAlert(nameField, "Come on, give me a name!");
		return;
	}

	resetAlert(phoneField);
	if (!phoneField.value) {
		invalidAlert(phoneField, "Yeah... I need a number");
		return;
	}

	resetAlert(emailField);
	if (!validateEmail(emailField.value)) {
		invalidAlert(emailField, "Please enter a valid email!");
		return;
	}

	// if no problme, then manually submit
	document.getElementById('signup-form').submit();


	// window.location.href = "./thankyou.html";
	// window.open('./thankyou.html', '_blank');
	close2Btn = document.getElementById("close2");
	trigger(close2Btn, "click"); // the most f*cking convoluted way of closing a modal 
	// literally dispatching an event that clicks on the close button 
	// which triggers the event listener attached to it to actually execute the close operation
	// clearly, I'm having too much fun. 
};

console.log(subscribeButton);
subscribeButton.addEventListener("click", formAlert);


