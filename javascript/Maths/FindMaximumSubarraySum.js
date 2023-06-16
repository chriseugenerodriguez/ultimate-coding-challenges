function MaxSubArraySum(arr) {
	var max = Number.MIN_VALUE
	var temp_max = 0

	for (var i = 0; i < arr.length; i++) {
		temp_max = temp_max + arr[i]
		if (max < temp_max)
			max = temp_max

		if (temp_max < 0)
			temp_max = 0
	}
	return max
}

// https://github.com/ComputeNepal/js-coding-challenges/blob/main/solutions/ch_14_Max_Subarray_Sum/readme.md