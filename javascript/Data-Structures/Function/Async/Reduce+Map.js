const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
asyncFuncArr
.map(async => async())
.reduce((acc, promise) => {
    return acc.then(() => promise).then(data => console.log(data));
}, Promise.resolve());

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md