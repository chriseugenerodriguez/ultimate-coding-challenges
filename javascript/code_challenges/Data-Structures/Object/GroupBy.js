function groupBy(values, iteratee) {
  const obj = {};
  for (let value of values) {
    const prop =
      typeof iteratee === "function" ? iteratee(value) : value[iteratee];
    prop in obj ? obj[prop].push(value) : (obj[prop] = [value]);
  }
  return obj;
}

// e.g.
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md