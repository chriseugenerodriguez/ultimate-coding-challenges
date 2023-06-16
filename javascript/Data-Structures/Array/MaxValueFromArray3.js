function MaxValueFromArray3(arr) {
	const max = arr.reduce((a, b) => a > b ? a : b);
	return arr.indexOf(max);
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md