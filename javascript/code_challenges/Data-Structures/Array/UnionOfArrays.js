const unionOfArrays = (arr1, arr2) => {
	const union = [...new Set([...arr1, ...arr2])];
	return union;
};

  // https://github.com/sameem420/50DaysOfJS/blob/main/Day%2021%20-%20Challenge/21stChallenge.js

