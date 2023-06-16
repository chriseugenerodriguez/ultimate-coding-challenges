// iterator
function* generatorFunc(param){
    while(true){
        yield Math.ceil(Math.random() * 100);
    }
}
// driver code
const it = generatorFunc();
const rand1 = it.next();
const rand2 = it.next();

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md