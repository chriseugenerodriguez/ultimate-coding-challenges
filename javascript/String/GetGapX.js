function getTheGapX(str) {
	let firstXPosition = str.indexOf("X");
	let lastXPosition = str.lastIndexOf("X");
	let count = 0;
	for (let i = firstXPosition; i < lastXPosition; i++) {
		count++;
	}
	if (!str.includes("X")) {
		count = -1;
	}
	return count;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%205%20-%20Challenge/5thChallenge.js