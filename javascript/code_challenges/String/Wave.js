function Wave(str) {
	let waveArray = [];
	for (let i = 0; i < str.length; i++) {
		let letter = str[i];
		if (letter === " ") {
			continue;
		} else {
			waveArray.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
		}
	}
	return waveArray;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2032%20-%20Challenge/32ndChallenge.js