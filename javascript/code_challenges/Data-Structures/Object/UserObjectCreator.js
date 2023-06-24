// Create an object which has a property 'userid' which can only be set once and will be a read only property

function UserObjectCreator(id) {
	const obj = {};
	Object.defineProperty(obj, "userid", {
		value: id,
		writable: false,
	});
	return obj;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md