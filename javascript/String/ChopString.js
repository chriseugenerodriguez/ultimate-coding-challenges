function ChopString(str, size = str.length) {
	const arr = [];
	let i = 0;
	while (i < str.length) {
		arr.push(str.slice(i, i + size));
		i = i + size;
	}
	return arr;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/primitives-challenges.md