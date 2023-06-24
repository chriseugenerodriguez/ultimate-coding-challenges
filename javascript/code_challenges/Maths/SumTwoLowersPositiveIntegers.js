function SumTwoLowersPositiveIntegers(numbers) {
	let min = numbers[0];
	let secondMin = numbers[1];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < min) {
			secondMin = min;
			min = numbers[i];
		} else if (numbers[i] < secondMin) {
			secondMin = numbers[i];
		}
	}
	return min + secondMin;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2042%20-%20Challenge/42ndChallenge.js