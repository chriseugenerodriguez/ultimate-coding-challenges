function MaxValueFromArray2(arr) {
	let max = a[0], position = 0;
	for (let index in arr) {
		if (arr[index] > max) {
			position = index
			max = value;
		}
	}
	return position;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md