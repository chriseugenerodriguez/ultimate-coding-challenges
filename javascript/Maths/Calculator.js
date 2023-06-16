function Calulator(num1, num2){
    function sum(){ 
        return num1 + num2; 
    }
    
    function difference(){ 
        return num1 - num2; 
    }
    
    function product(){ 
        return num1 * num2; 
    }
    
    function dividend(){ 
        return Math.floor(num1 / num2); 
    }
    return { sum, difference, product, dividend };
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md