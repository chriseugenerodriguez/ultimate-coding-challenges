function truncateWithWordLimit(str, wordLimit) {
	return str.split(" ").slice(0, wordLimit).join(" ");
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%206%20-%20Challenge/6thChallenge.js