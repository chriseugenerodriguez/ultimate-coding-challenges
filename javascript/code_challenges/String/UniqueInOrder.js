let UniqueInOrder = (iterable) => {
	let arr = [];
	for (var i = 0; i < iterable.length; i++) {
		if (iterable[i] !== iterable[i + 1]) arr.push(iterable[i]);
	}
	return arr;
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2022%20-%20Challenge/22ndChallenge.js