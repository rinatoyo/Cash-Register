var calculatorModule = (function (){
// console.log('hello world');
// let firstNum = 0;
// let nextNum = 0;
let memory = 0;
let total = 0;
let balance = 0;
let calculator = {};

calculator.load = function (x){
    if(parseFloat(x) === NaN){
        if(total !== 0 && parseFloat(total) !== NaN){
            total += x;
        }
    }else {
        if(total === 0){
            total = x;
        }else {
            total += x;
        }
    }
}
// calculator.getFirstNum = function(x){
//     firstNum = x;
//     return getFirstNum;
// }
// calculator.getNextNum = function(x){
//     nextNum = x;
//     return getNextNum;
// }
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
calculator.getTotal = function(){
    return total;
}
calculator.saveMemory = function(){
    return memory = total;
}
calculator.depositCash = function(x){
    return balance += x; //balance = balance + x
}
calculator.getBalance = function(){
    balance = memory;
    return balance;
}
calculator.clear = function(){
    total = 0;
    // memory = 0;
    firstNum = 0;
    return total, memory;
}

return calculator;
// {
//     load:load,
//     getFirstNum:getFirstNum,
//     getNextNum:getNextNum,
//     getTotal:getTotal,
//     add:add,
//     subtract:subtract,
//     multiply:multiply,
//     divide:divide,
//     clear:clear,
//     saveMemory:saveMemory,
//     getBalance:getBalance,
//     depositCash:depositCash
// };

})();

// console.log(calculatorModule);