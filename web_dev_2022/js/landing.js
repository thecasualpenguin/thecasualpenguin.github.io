// the actual 'trigger' function
const trigger = (el, etype, custom) => {
	const evt = custom ?? new Event(etype, { bubbles: true });
	el.dispatchEvent(evt);
};

function isInViewport(element) {
	// currently only checks top and bottom
	const rect = element.getBoundingClientRect();
	return (
		(rect.top >= 0 &&
			rect.top <
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.bottom >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
		// rect.left >= 0 ||
		// rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

let showNavbar = () => {
	let navbar = document.getElementById("vertical-navbar");
	navbar.style.transform = "translate(0px)";
}

let hideNavbar = function() {
	let navbar = document.getElementById("vertical-navbar");
	if (!navbar.matches(':hover')) {
		navbar.style.transform = `translate(-${navbar.offsetWidth}px)`;
	}
}

banner = document.getElementById("bannerContainer");

let lastPageOffset = 0;

window.addEventListener("scroll", (event) => {
	let scrollTop =
		window.pageYOffset !== undefined
			? window.pageYOffset
			: (document.documentElement || document.body.parentNode || document.body)
					.scrollTop;

	let firstSection = document.getElementById("section-1");
	// console.log(isInViewport(firstSection));

	// deprecated: hides by percentage of offset from landing section
	// let percentMovedOff = Math.min(Math.abs(firstSection.getBoundingClientRect().top/window.innerHeight), 1)
	// let duckAmount = navbar.offsetWidth * percentMovedOff;
	// navbar.style.transform = `translate(-${duckAmount}px)`;

	let idempotency = false;

	if (scrollTop - lastPageOffset > 0) {
		// console.log("scroll down");
		hideNavbar();
	} else {
		// console.log("scroll up");
		showNavbar();
	}

	lastPageOffset = scrollTop;
});

// additional comfort feature to close navbar if clicked outside of it
window.addEventListener("click", function (e) {
	let navbar = document.getElementById("vertical-navbar");

	if (navbar.contains(e.target)) {
		// console.log("clicked inside navbar");
	} else {
		// navbar.style.transform = `translate(-${navbar.offsetWidth}px)`;
		// console.log("clicked outside navbar");
	}
});

// checks if within the column that contains navbar
function isWithin(mouseX, mouseY, element) {
	box = element.getBoundingClientRect()
	let [x1, x2, y1, y2] = [box.left, box.right, box.top, box.bottom];

	if (mouseX > 0 && mouseX < Math.abs(box.right-box.left))
		return true;
	return false;
}


// another comfort features where on mousemove, reveal navbar if within it's bounding box
window.addEventListener("mousemove", function(e) {
	let navbar = document.getElementById("vertical-navbar");
	if (isWithin(e.clientX, e.clientY, navbar)) {
		showNavbar()
	} else {
		// hideNavbar()
	}
});

// another comfort feature, if idle for more than 3.5 seconds, autohide navbar
let inactivityTime = function () {
	let time;

	function logout() {
    // check not currently hovering on navbar
			hideNavbar();
	}

	function resetTimer() {
		clearTimeout(time);
		if (window.pageYOffset > 0) // so if we are exactly on landing page, persist menu
			time = setTimeout(logout, 1500);
		// 1000 milliseconds = 1 second
	}

	window.addEventListener("load", resetTimer, true);
	let events = ["mousedown", "keypress", "scroll", "touchstart"]; // took out "mousemove"
	events.forEach(function (name) {
		document.addEventListener(name, resetTimer, true);
	});
};

inactivityTime();

// refreshing clock
clock = document.querySelector('#clock');

setInterval(() => {
	clock.textContent = new Date().toLocaleString();
}, 1000);


// toggle light/dark mode

toggleTheme = document.querySelector('#toggleTheme');

toggleTheme.addEventListener('change', (e) => {

	document.body.classList.toggle("dark-mode");
	clock.classList.toggle("dark-mode");
	

	// get all things to change
	let toggleLabel = document.getElementById('toggleLabel')
	let founderPic = document.getElementById('founder-img').querySelector('img')
	let founderLink = document.getElementById('founder-img')
	let navbar = document.getElementById("vertical-navbar");
	let landingVid = document.getElementById('landingVideo');
	let landingSrc = document.getElementById('landingVideo').querySelector('source');

	let navItems = document.querySelectorAll("li > a");
	console.log(navItems);
	
	if (localStorage.getItem("mode") == 'light') {
		// if lightmode, change to dark
		localStorage.setItem("mode", 'dark');
		toggleLabel.style.color = "white";
		founderPic.src = "images/founder2.jpg";
		founderLink.href = "images/founder2.jpg"
		toggleLabel.style.color = "white";
		// navbar.classList.add("dark-mode");
		
		landingSrc.src = 'videos/landing-dark.mp4';
		landingVid.pause(); landingVid.load(); landingVid.play();
		
		for (let e of navItems) {
			console.log(e);
			// e.style.color = "white";
			// e.style.fontWeight = "300";
		}
		
	} 
	else {
		// if darkmode, change to light
		localStorage.setItem("mode", 'light');
		
		founderPic.src = "images/founder.jpg";
		founderLink.href = "images/founder1.jpg"
		toggleLabel.style.color = "#222";

		landingSrc.src = 'videos/landing.mp4';
		landingVid.pause(); landingVid.load(); landingVid.play();

		for (let e of navItems) {
			console.log(e);
			// e.style.color = "black";
			// e.style.fontWeight = "400";
		}
		
	}
});

// load last preference by default

console.log(localStorage.getItem("mode"));

if (localStorage.getItem("mode") == null) {
	localStorage.setItem("mode", "light");
}
if (localStorage.getItem("mode") == "dark") {
	// so we must simulate a click on this toggle button when we are currently on "light" mode
	document.getElementById("checkbox").checked = "True";
	localStorage.setItem("mode", "light");
	trigger(toggleTheme, "change");
}


// add dynamic login/signout change
let userControl = document.getElementById('user-control');
let userControl2 = document.getElementById('user-control-2');
if (localStorage.getItem("loggedin") == 1){
	userControl.style.display = "None";
} else {
	userControl2.style.display = "None";
}

let signout = document.querySelector('#signout a');

signout.addEventListener('click', (e) => {
	e.preventDefault();
	localStorage.setItem("loggedin", '0');
	
	// swap controls
	userControl2.style.display = "None";
	userControl.style.display = "grid";
	userControl.style.animation = "fadeIn 1.5s"

})



