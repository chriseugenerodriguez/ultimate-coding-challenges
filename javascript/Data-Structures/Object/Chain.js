var obj = {
	id: 1,
	username: "Jane",
	dept: "Computers",
	displayId() {
		console.log("Id: " + this.id);
		return this;
	},
	displayName() {
		console.log("Name: " + this.username);
		return this;
	},
	displayDept(dept) {
		if (typeof dept !== "undefined") {
			this.dept = dept;
		}
		console.log("Dept: " + this.dept);
		return this;
	},
};
// driver code
obj.displayId().displayName().displayDept("Info Tech");

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md