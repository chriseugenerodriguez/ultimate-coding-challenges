const obj = {
	id: 1,
	username: "John",
	password: "secret",
	email: "john@email.com",
};

// {"id":1,"username":"John","email":"john@email.com"}
JSON.stringify(obj, (key, value) => (key === "password" ? undefined : value)); 
// OR
// {"id":1,"username":"John","email":"john@email.com"}
JSON.stringify(obj, ["id", "username", "email"]);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md