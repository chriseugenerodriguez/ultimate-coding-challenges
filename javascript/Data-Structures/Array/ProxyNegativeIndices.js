/*Create a Proxy object through which the array can be accessed as usual but also allow to access the values through negative indices*/

// Example
let arr = [10, 20, 30];
arr[-1];            // 30
arr[-2];            // 20

// `get` trap of proxy can be used to map the negative index to the valid array position

arr = new Proxy(arr, {
    get(target, handler) {
        if (handler < 0) return target[target.length + Number(handler)];
        else return target[handler];
    },
});

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md