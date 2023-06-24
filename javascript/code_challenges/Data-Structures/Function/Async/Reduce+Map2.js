const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
asyncFuncArr
.map(async => async())
.reduce(async (acc, promise) => {
    console.log(await acc.then(() => promise));
}, Promise.resolve());

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md