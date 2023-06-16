function IsIsogram2(str) {
	return new Set(str.toLowerCase()).size === str.length;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2047%20-%20Challenge/47thChallenge.js