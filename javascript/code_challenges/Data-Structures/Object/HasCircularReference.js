function HasCircularReference(obj) {
	try {
		JSON.stringify(obj);
		return false;
	} catch {
		return true;
	}
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md