function RemoveDuplicatesFromArray(arr) {
	// Create a new array to store the unique elements
	let uniqueArr = [];

	// Loop through the input array
	for (let i = 0; i < arr.length; i++) {
		// If the current element is not in the unique array, add it
		if (!uniqueArr.includes(arr[i])) {
			uniqueArr.push(arr[i]);
		}
	}

	// Return the unique array
	return uniqueArr;
}

// https://github.com/ComputeNepal/js-coding-challenges/blob/main/solutions/ch_13_Remove_Duplicate_From_Array/readme.md