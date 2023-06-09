function HumanReadableDateFormat(seconds) {
	let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
		res = [];

	if (seconds === 0) return "now";

	for (let key in time) {
		if (seconds >= time[key]) {
			let val = ~~(seconds / time[key]);
			res.push((val += val > 1 ? " " + key + "s" : " " + key));
			seconds = seconds % time[key];
		}
	}
	return res.length > 1
		? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
		: res[0];
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2048%20-%20Challenge/48thChallenge.js