function FindOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		const count = arr.filter((value) => value === arr[i]).length;
		if (count % 2 == 1) {
			return arr[i];
		}
	}
	return -1;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2026%20-%20Challenge/26thChallenge.js