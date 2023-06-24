function NthLargestInArray(arr, highest) {
	var sorted = arr.sort((a, b) => {
		return a - b;
	});
	return sorted[sorted.length - highest];
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2035%20-%20Challenge/35thChallenge.js