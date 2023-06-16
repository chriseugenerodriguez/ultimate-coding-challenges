let UniqueInOrder2 = (iterable) => {
	return [...iterable].filter((a, i) => a !== iterable[i - 1]);
  };


// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2022%20-%20Challenge/22ndChallenge.js