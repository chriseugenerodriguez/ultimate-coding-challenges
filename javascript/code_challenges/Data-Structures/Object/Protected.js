function ProtectedFunction() {
	const objectCollection = new WeakSet();
	objectCollection.add(this);
	if (!ProtectedFunction.prototype.method) {
		ProtectedFunction.prototype.method = function () {
			if (!objectCollection.has(this))
				throw new TypeError("Incompatible object!");
			return "Access granted";
		};
	}
}
// driver code
const protectedObj = new ProtectedFunction();
protectedObj.method(); // Access granted
const obj = {};
ProtectedFunction.prototype.method.call(obj); // Incompatible object!

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md