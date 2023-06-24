function MakeIterator(array) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < array.length
				? {
					value: array[nextIndex++],
					done: false,
				}
				: {
					done: true,
				};
		},
	};
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md