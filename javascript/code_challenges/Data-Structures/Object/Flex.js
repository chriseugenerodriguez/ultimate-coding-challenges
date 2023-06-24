// The access to the index happens for arrays by default and the Proxy can be setup to enable the fetching of object using primary key (any other key can also be coded)

// Example
const employees = [
	{ name: "John", id: "1" },
	{ name: "Jane", id: "2" },
	{ name: "Pai", id: "0" },
];
flexEmployees[0]; // { name: 'John', id: '1' }
flexEmployees["Pai"]; // { name: 'Pai', id: '0' }
flexEmployees["doe"]; // undefined

const flexEmployees = new Proxy(employees, {
	get(target, handler) {
		if (handler in target) {
			return target[handler];
		} else if (typeof handler === "string") {
			return target.find((obj) => obj.name === handler);
		} else {
			return undefined;
		}
	},
});

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md