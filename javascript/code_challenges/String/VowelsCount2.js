function VowelsCount2(str) {
	const vowelsCount = str.match(/[aeiou]/gi).length;
	return vowelsCount;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2027%20-%20Challenge/27thChallenge.js