function SpinWords(string) {
	string = string.split(" ");
	string = string.map((str) => {
		return str.length > 4 ? str.split("").reverse().join("") : str;
	});
	return string.join(" ");
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2025%20-%20Challenge/25thChallenge.js