function EqualSidesOfArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		let leftSum = 0;
		let rightSum = 0;

		for (let j = 0; j < i; j++) leftSum += arr[j];
		for (let j = i + 1; j < arr.length; j++) rightSum += arr[j];

		if (leftSum === rightSum) return i;
	}
	return -1;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2023%20-%20Challenge/23rdChallenge.js