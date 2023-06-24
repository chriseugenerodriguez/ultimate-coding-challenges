const IsLeapYear = (year) => {
	if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
		return true;
	}
	return false;
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2037%20-%20Challenge/37thChallenge.js