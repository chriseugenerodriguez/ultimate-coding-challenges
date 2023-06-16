function DeepCopy(obj) {
	if (!obj) return obj;
	const copyObj = {};
	for (const key in obj) {
		if (typeof obj[key] !== "object" || Array.isArray(obj[key]))
			copyObj[key] = obj[key];
		else copyObj[key] = deepCopy(obj[key]);
	}
	return copyObj;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md