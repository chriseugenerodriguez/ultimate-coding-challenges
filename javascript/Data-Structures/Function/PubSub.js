function PubSub() {
    const subscribers = [];
    function publish(data) {
        subscribers.forEach(subscriber => subscriber(data));
    }
    function subscribe(fn) {
        subscribers.push(fn);
    }
    return {
        publish,
        subscribe,
    };
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md