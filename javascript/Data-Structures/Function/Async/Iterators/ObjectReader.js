function* ObjectReader(obj){
    for(let key in obj){
        if(typeof obj[key] === "object"){
            yield *ObjectReader(obj[key]);
        }
        else{
            yield obj[key];
        }
    }
}

// e.g.
const it = ObjectReader({a: 1, b: 2, c: 3, d: { x: 4, y: 5, z: {m: 6, b: 7}}});
const searchValue = 5;
for(let value of it){
    if(value === searchValue) {
        console.log(searchValue + " exists");
    }
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md