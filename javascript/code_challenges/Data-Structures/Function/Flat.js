function Flat(arr) {
	const flatArr = [];
	arr.forEach((value) => {
		if (Array.isArray(value)) {
			flatArr.push(...flat(value));
		}
		else {
			flatArr.push(value);
		}
	});
	return flatArr;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md