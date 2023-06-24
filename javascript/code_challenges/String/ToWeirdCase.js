function ToWeirdCase(string) {
	let newStr = [];
	for (let i = 0; i < string.length; i++) {
		newStr.push(
			i % 2 === 0 ? string[i].toUpperCase() : string[i].toLowerCase()
		);
	}
	return newStr.join("");
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2028%20-%20Challenge/28thChallenge.js