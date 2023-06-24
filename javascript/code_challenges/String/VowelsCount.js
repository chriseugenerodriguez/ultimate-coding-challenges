function VowelsCount(str) {
	str = str.toLowerCase();
	let vowels = ["a", "e", "i", "o", "u"];
	let vowelsCount = 0;
	for (let letter of str) {
		if (vowels.includes(letter)) {
			vowelsCount += 1;
		}
	}
	return vowelsCount;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2027%20-%20Challenge/27thChallenge.js