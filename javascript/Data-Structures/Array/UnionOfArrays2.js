const unionOfArrays2 = (arr1, arr2) => {
	const arr = arr1.concat(arr2);
	return arr.filter((elem, index) => {
		return arr.indexOf(elem) === index;
	});
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2021%20-%20Challenge/21stChallenge.js