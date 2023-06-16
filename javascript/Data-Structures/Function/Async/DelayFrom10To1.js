var num1 = 10, num2 = 1;
for (var i = num1; i >= num2; i--) {
    (function (i) {
        setTimeout(function() { console.log(i); }, (num1 - i) * 1000);
    })(i);
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md