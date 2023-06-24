function DeepEqual(object1, object2) {
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);
	if (keys1.length !== keys2.length) {
		return false;
	}
	for (const key of keys1) {
		const val1 = object1[key];
		const val2 = object2[key];
		const areObjects =
			val1 != null &&
			typeof val1 === "object" &&
			val2 != null &&
			typeof val2 === "object";
		if (
			(areObjects && !deepEqual(val1, val2)) ||
			(!areObjects && val1 !== val2)
		) {
			return false;
		}
	}
	return true;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md