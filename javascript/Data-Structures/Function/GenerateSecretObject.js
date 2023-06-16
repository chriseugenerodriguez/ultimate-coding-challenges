/*
This technique is helpful in logging or managing the data being passed to & returned from function without modifying the actual function code especially when function is a part of library or framework
*/

function generateSecretObject(key, value) {
    return { [key]: value };
}
generateSecretObject = new Proxy(generateSecretObject, {
    apply(target, context, args) {
        console.log(`${target.name} function is accessed at ${new Date()}`);
        return target.apply(context, args);
    },
});

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md