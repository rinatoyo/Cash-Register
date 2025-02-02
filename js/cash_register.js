let calcMod = calculatorModule;

//declare variables for number buttons
let calcNumBtns = document.querySelectorAll('.num');
let btnDecimal = document.querySelector('#calc-decimal');

let firstNum = 0;
let operation = '';
let secondNum = 0;

 //declare variables for operators
 let calcOpBtns = document.querySelectorAll('.op');

 let btnDivide = document.querySelector('#calc-divide');
 let btnMultiply = document.querySelector('#calc-multiply');
 let btnMinus = document.querySelector('#calc-minus');
 let btnPlus = document.querySelector('#calc-plus');
 let btnEqual = document.querySelector('#calc-equals');

 //declare variables for functions
 let calcFuncBtns = document.querySelectorAll('.func');

let btnClear = document.querySelector('#calc-clear');
let btnBalance = document.querySelector('#calc-balance');
let btnDeposit = document.querySelector('#calc-deposit');
let btnWithdraw = document.querySelector('#calc-withdraw');

//cost display
let priceDisplay = document.querySelector('#price');

//number event listeners

for(let i=0; i<calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', showNum);
}
 
function showNum(){
    priceDisplay.textContent += this.textContent;
    if(!firstNum){
        firstNum = parseFloat(this.textContent);
        calcMod.load(parseFloat(this.textContent));    
    }else if(firstNum && operation){
        secondNum = parseFloat(this.textContent);
    }
    // priceDisplay.innerHTML = calcMod.getTotal();
}

// calcNumBtns.forEach(function(x) {
//     x.addEventListener("click", function() {
//     })
// });

//operator event listeners
for (let x=0; x<calcOpBtns.length; x++){
    calcOpBtns[x].addEventListener('click', doOps)
}

function doOps(){
    let x = parseInt(priceDisplay.innerHTML);
    // firstNum = priceDisplay.innerHTML;
    priceDisplay.innerHTML = '';
    if(this.innerHTML === '+'){
        operation = '+';
    }else if(this.innerHTML === '-'){
        operation = '-';
    }else if(this.innerHTML === 'x'){
        operation = 'x';
    }else if(this.innerHTML === '÷'){
        operation = '÷';
    }
}


//decimal to be entered only once
// for (let i=0; i<btnDecimal.length; i++){
    btnDecimal.addEventListener('click', showDecimal)
//}

function showDecimal(){
    if(this.id === 'calc-decimal' && priceDisplay.innerHTML.indexOf('.')!== -1){

    }else {
        priceDisplay.innerHTML += this.innerHTML;
    }
} //this is not working :(


//equal button
btnEqual.addEventListener('click', result)
function result(){
    if(operation === '+'){
        priceDisplay.innerHTML = calcMod.add(secondNum);
        // priceDisplay.innerHTML = calcMod.getTotal();
        // console.log(calcMod.saveMemory());
        priceDisplay.innerHTML = calcMod.saveMemory();
    }else if(operation === '-'){
        priceDisplay.innerHTML = calcMod.subtract(secondNum);
        // priceDisplay.innerHTML = calcMod.getTotal();
        priceDisplay.innerHTML = calcMod.saveMemory();
    }else if(operation === 'x'){
        priceDisplay.innerHTML = calcMod.multiply(secondNum);
        // priceDisplay.innerHTML = calcMod.getTotal();
        priceDisplay.innerHTML = calcMod.saveMemory();
    }else if(operation === '÷'){
        priceDisplay.innerHTML = calcMod.divide(secondNum);
        // priceDisplay.innerHTML = calcMod.getTotal();
        priceDisplay.innerHTML = calcMod.saveMemory();
    }
}


//function event listeners
for(let y=0; y<calcFuncBtns.length; y++){
    calcFuncBtns[y].addEventListener('click', doFunc)
}

function doFunc(){
    if(this.innerHTML === 'CL'){
        console.log(calcMod.clear());
        priceDisplay.innerHTML = calcMod.clear();
        priceDisplay.innerHTML = '';
    }else if(this.innerHTML === 'DEP'){
        // let x = priceDisplay.innerHTML;
        priceDisplay.innerHTML = calcMod.depositCash();
    }else if(this.innerHTML === 'BAL'){
        // let x = priceDisplay.innerHTML;
        priceDisplay.innerHTML = calcMod.getBalance();
    }
}