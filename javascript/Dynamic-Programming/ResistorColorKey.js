const ResistorColorKey = (color) => {
	const colors = {
		Black: 0,
		Brown: 1,
		Red: 2,
		Orange: 3,
		Yellow: 4,
		Green: 5,
		Blue: 6,
		Violet: 7,
		Grey: 8,
		White: 9,
	};
	for (let key in colors) {
		if (key.toLowerCase() === color) return colors[key];
	}
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2019%20-%20Challenge/19thChallenge.js