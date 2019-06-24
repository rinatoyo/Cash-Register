var calculatorModule = (function (){
// console.log('hello world');
let memory = 0;
let total = 0;
let calculator = {};

calculator.load = function (x){
    if(typeof x === 'number'){
        total = x;
        return total;
    }else{
        throw error;
    }
}

calculator.getTotal = function(x){
    return total;
}

calculator.add = function (x){
    if(typeof x === 'number'){
        return total += x;
    }else{
        throw error;
    }
}

calculator.subtract = function(x){
    if(typeof x === 'number'){
        return total -= x;
    }else{
        throw error;
    }
}

calculator.multiply = function(x){
    if(typeof x === 'number'){
        return total *= x;
    }else{
        throw error;
    }
}

calculator.divide = function(x){
    if(typeof x === 'number'){
        return total /= x;
    }else{
        throw error;
    }
}

calculator.clear = function(x){
    return total = 0;
}

calculator.recallMemory = function(x){
    return memory;
}

calculator.saveMemory = function(x){
    return memory = total;
}

calculator.clearMemory = function (x){
    return memory = 0;
}

return calculator;

})();

console.log(calculatorModule);