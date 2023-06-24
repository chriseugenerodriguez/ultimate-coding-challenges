function RequestManager(url, attempts = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

RequestManager('https://reqbin.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md