function FindOutlier(integers) {
	let evens = [],
		odds = [];
	for (let num of integers) {
		if (num % 2 != 0) {
			odds.push(num);
		} else {
			evens.push(num);
		}
	}
	return evens.length === 1 ? evens[0] : odds[0];
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2045%20-%20Challenge/45thChallenge.js