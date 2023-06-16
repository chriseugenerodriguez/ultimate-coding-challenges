function Counter() {
	const symCounter = Symbol("counter");
	const obj = {
		[symCounter]: 0,
		get counter() {
			return ++this[symCounter];
		},
		set counter(value) {
			throw new Error("Cannot set the counter");
		},
	};
	return obj;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md