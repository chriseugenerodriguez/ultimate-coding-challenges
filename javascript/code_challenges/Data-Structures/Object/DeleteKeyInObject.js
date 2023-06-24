for (let key in obj) {
	if (obj.hasOwnProperty(key)) {
		delete obj[key];
	}
}

const newObj = {};
Object.setPrototypeOf(newObj, obj);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md