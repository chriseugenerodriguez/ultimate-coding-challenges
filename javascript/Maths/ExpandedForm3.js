function ExpandedForm3(num) {
	var multiple = 10;
	var result = [];
	while (num > 1) {
		var remainder = num % multiple;
		if (remainder > 0) {
			result.unshift(remainder);
		}
		num -= remainder;
		multiple = multiple * 10;
	}
	return result.join(" + ");
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2024%20-%20Challenge/24thChallenge.js