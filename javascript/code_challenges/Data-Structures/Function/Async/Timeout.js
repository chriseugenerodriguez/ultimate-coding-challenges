function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => setTimeout(() => reject("Timeout"), delay));
    
}


const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catch(console.log);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md