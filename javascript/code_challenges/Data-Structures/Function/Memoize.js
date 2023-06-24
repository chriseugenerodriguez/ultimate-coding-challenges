function Memoize(fn) {
    const cache = new Map();
    return function () {
        const key = JSON.stringify(arguments);
        
        // if the caculations have already been done for inputs, return the value from cache
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            // call the function with arguments and store the result in cache before returning
            cache.set(key, fn(...arguments));
            return cache.get(key);
        }
    };
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md