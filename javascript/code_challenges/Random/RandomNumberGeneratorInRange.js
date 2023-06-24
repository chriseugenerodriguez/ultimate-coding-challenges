function RandomNumberGeneratorInRange(rangeStart, rangeEnd) {
	return ~~(Math.random() * (rangeEnd - rangeStart) + rangeStart);
}

// Instead of Math.floor() we can use double telda ~~ symbol for conversion
// https://github.com/sameem420/50DaysOfJS/blob/main/Day%201%20-%20Challenge/1stChallenge.js
