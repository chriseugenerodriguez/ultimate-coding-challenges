function MiddleCharacters(str) {
	let mid = 0;
	if (str.length % 2 !== 0) {
		mid = ~~(str.length / 2);
		return str[mid];
	} else {
		mid = str.length / 2;
		return str[mid - 1] + str[mid];
	}
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2050%20-%20Challenge/50thChallenge.js