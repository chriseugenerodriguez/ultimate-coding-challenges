const needsLicense = (kind) => {
	let licenseRequired = false;
	switch (kind) {
		case "car":
			licenseRequired = true;
			break;
		case "truck":
			licenseRequired = true;
			break;
		default:
			licenseRequired = false;
	}
	return licenseRequired;
};

const chooseVehicle = (option1, option2) => {
	return option1.charCodeAt(0) > option2.charCodeAt(0)
		? `${option2} is clearly the better choice.`
		: `${option1} is clearly the better choice.`;
};

const calculateResellPrice = (originalPrice, age) => {
	let price = 0;
	if (age < 3) {
		price = (80 / 100) * originalPrice;
	}
	if (age > 10) {
		price = (50 / 100) * originalPrice;
	}
	if (age >= 3 && age <= 10) {
		price = (70 / 100) * originalPrice;
	}
	return price;
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2040%20-%20Challenge/40thChallenge.js