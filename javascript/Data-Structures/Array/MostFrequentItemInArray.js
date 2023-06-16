function MostFrequentItemInArray(arr) {
	var mf = 1;
	var m = 0;
	var item;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {
			if (arr[i] == arr[j]) m++;
			if (mf < m) {
				mf = m;
				item = arr[i];
			}
		}
		m = 0;
	}
	return [item, mf].join(" ").toString();
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2034%20-%20Challenge/34thChallenge.js