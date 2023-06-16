function KeyValuePrinter(obj) {
	for (let key in obj) {
		if (typeof obj[key] !== "object") {
			console.log("[" + key + " : " + obj[key] + "]");
		} else {
			KeyValuePrinter(obj[key]);
		}
	}
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md