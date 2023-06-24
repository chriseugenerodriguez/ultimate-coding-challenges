const readOnlyObj = new Proxy(obj, {
	get: function (target, key) {
		return target[key];
	},
	set: function () {
		if (target.hasOwnProperty(key)) {
			throw new Error("Object properties are read only");
		}
		target[key] = value;
	},
});

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md