function truncateString(str, charCount) {
	if (str.length > charCount) {
		return str.substr(0, charCount - 3) + '...';
	} else {
		return str;
	}
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/primitives-challenges.md