const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md