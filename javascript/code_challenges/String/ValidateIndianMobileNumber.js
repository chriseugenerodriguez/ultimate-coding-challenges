
function ValidateIndianMobileNumber(number) {
	number = number.replace(/(\s|-)/g, "");
	const numberValidator = new RegExp(
		/^(((\+?\(91\))|0|((00|\+)?91))-?)?[7-9]\d{9}$/
	);
	return numberValidator.test(number);
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%207%20-%20Challenge/7thChallenge.js