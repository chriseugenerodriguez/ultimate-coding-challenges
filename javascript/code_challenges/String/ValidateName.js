function ValidateName(str, searchText) {
	const regex = new RegExp("^(\\w*\\s)?" + searchText + "\\w*?", "i");
	return regex.test(str);
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/primitives-challenges.md