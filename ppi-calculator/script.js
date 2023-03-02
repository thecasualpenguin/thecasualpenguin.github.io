const SCALING_FACTOR = 3438;
// using 1 arcminute (https://www.macstories.net/news/does-retina-display-exceed-the-human-retina-or-not/)

// initial rendering
let formInputs = document.getElementById("customDevice").elements;
handleCalculate();

// attach listeners
addEventListener("keyup", handleCalculate);
addEventListener("keydown", handleCalculate); // in case you hold it and don't release

function handleCalculate() {
	let [width, height, diag] = [
		formInputs["width"].value,
		formInputs["height"].value,
		formInputs["diagonal"].value,
	];

	console.log(width, height, diag);

	let placeholder = "check your inputs...";
	if (
		width === "" ||
		height === "" ||
		diag === "" ||
		isNaN(width) ||
		isNaN(height) ||
		isNaN(diag)
	) {
		updateRes(placeholder, placeholder, placeholder);
		return;
	}

	updateRes(...retina(width, height, diag));
}

function updateRes(ppi, dist, ratio) {
	let ppi_field = document.getElementById("ppi").getElementsByTagName("b")[0];
	let dist_field = document.getElementById("dist").getElementsByTagName("b")[0];
	let ratio_field = document
		.getElementById("aspect")
		.getElementsByTagName("b")[0];

	ppi_field.innerHTML = ppi;
	dist_field.innerHTML = dist;
	ratio_field.innerHTML = ratio;
}

function retina(w, h, d) {
	let ppi = (Math.sqrt(w * w + h * h) / d).toFixed(2),
		dist = (SCALING_FACTOR / ppi).toFixed(0),
		[num, den] = toFraction(w / h);

	return [ppi, dist, `${num}:${den}`];
}

function toFraction(x, tolerance) {
	if (x == 0) return [0, 1];
	if (x < 0) x = -x;
	if (!tolerance) tolerance = 0.0001;
	var num = 1,
		den = 1;

	function iterate() {
		var R = num / den;
		if (Math.abs((R - x) / x) < tolerance) return;

		if (R < x) num++;
		else den++;
		iterate();
	}

	iterate();
	return [num, den];
}

function populateWithDeviceSize() {
	let [device_w, device_h] = [document.device.width, document.device.height];
	// yeah, we can't actual get physical diagonal size...
}
