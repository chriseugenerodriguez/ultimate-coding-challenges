const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md