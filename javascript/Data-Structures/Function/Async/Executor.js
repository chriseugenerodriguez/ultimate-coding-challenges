(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    }
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async2 failure');
    }
    try {
        await asyncFunc3();
        console.log('Async3 success');
    } catch {
        console.log('Async3 failure');
    }
    console.log('All succeeded');
})();

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md