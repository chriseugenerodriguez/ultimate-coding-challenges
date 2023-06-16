function RemoveCircularReference(obj) {
	const set = new WeakSet([obj]);
	(function iterateObj(obj = circularReference) {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === "object")
					if (set.has(obj[key])) delete obj[key];
					else {
						set.add(obj[key]);
						iterateObj(obj[key]);
					}
			}
		}
	})();
}