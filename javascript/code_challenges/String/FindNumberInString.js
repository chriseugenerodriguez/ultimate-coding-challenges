function FindNumberInString(mixArray) {
	return mixArray.filter((value) => {
		return /[0-9]/.test(value);
	});
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/primitives-challenges.md