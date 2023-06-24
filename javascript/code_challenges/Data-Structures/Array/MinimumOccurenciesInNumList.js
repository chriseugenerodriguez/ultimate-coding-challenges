function MinimumOccurenciesInNumList(arr) {
	const min = Math.min(...arr);
	minArr = arr.filter((value) => value === min);
	return minArr.length;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md