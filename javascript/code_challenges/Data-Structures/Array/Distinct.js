function DistinctArr(arr1, arr2) {
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
	return [...set1, ...set2];
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md