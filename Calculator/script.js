let calcBool = false;
let decimalBool = false;
let operator = "";
let value1 = 0;
let value2 = 0;
// selectors //
const calcDisplaytop = document.querySelector(".topCalc");
const calcDisplay = document.querySelector(".curCalc");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const number0 = document.querySelector(".number0");
const allClear = document.querySelector(".allClear");
const signSwap = document.querySelector(".signSwap");
const module = document.querySelector(".module");
const addition = document.querySelector(".addition");
const multiplcation = document.querySelector(".multiplcation");
const divison = document.querySelector(".divison");
const subtraction = document.querySelector(".subtraction");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const del = document.querySelector(".del");

function add (a , b) {
	return a + b;
};

function subtract (a , b) {
	return a - b;
};
function multiply (a , b) {
	return a * b;
};
function divide (a , b) {
	return a / b;
};
function mod (a, b)
{
    return a % b;
}
function operate (value1, operator, value2){
    if(operator == "+")
        return add(value1, value2);
    if(operator == "-")
        return subtract(value1, value2);
    if(operator == "*")
        return multiply(value1, value2);
    if(operator == "/")
        return divide(value1, value2);
    if(operator == "%")
        return mod (value1, value2);
}
allClear.addEventListener('click', () => {
    calcDisplay.innerHTML = 0;
    calcDisplaytop.innerHTML = '';
    value1 = 0;
    value2 = 0;
    calcBool = false;
    decimalBool = false;
})
signSwap.addEventListener('click', () => {
    calcDisplay.innerHTML *= -1;
})
decimal.addEventListener('click', () => {
    if(!decimalBool)
    {
        calcDisplay.innerHTML += '.';
        decimalBool = true;
    }
    //!calcBool ? value1 = calcDisplay.innerHTML;
})
number1.addEventListener('click', () => {
    calcDisplay.innerHTML == 0 && !decimalBool ? calcDisplay.innerHTML = 1 : calcDisplay.innerHTML  += 1;
});
number2.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 2 : calcDisplay.innerHTML  += 2;
});
number3.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 3 : calcDisplay.innerHTML  += 3;
});
number4.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 4 : calcDisplay.innerHTML  += 4;
});
number5.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 5 : calcDisplay.innerHTML  += 5;
});
number6.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 6 : calcDisplay.innerHTML  += 6;
});
number7.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 7 : calcDisplay.innerHTML  += 7;
});
number8.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 8 : calcDisplay.innerHTML  += 8;
});
number9.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 9 : calcDisplay.innerHTML  += 9;
});
number0.addEventListener('click', () => {
    calcDisplay.innerHTML == 0  && !decimalBool ? calcDisplay.innerHTML = 0 : calcDisplay.innerHTML  += 0;
});
addition.addEventListener('click', () => {
    if(!calcBool)
    {
        operator = "+";
        value1 = calcDisplay.innerHTML;
        calcDisplay.innerHTML += '+';
        calcDisplaytop.innerHTML = value1 + operator;
        calcDisplay.innerHTML = 0;
        decimalBool = false;
        calcBool = true;
    }
    else
    calcDisplay.innerHTML += '';
})
divison.addEventListener('click', () => {
    if(!calcBool)
    {
        operator = "/";
        value1 = calcDisplay.innerHTML;
        calcDisplay.innerHTML += '/';
        calcDisplaytop.innerHTML = value1 + operator;
        calcDisplay.innerHTML = 0;
        decimalBool = false;
        calcBool = true;
    }
    else
    calcDisplay.innerHTML += '';
})
multiplcation.addEventListener('click', () => {
    if(!calcBool)
    {
        operator = "*";
        value1 = calcDisplay.innerHTML;
        calcDisplay.innerHTML += '*';
        calcDisplaytop.innerHTML = value1 + operator;
        calcDisplay.innerHTML = 0;
        decimalBool = false;
        calcBool = true;
    }
    else
    calcDisplay.innerHTML += '';
})
subtraction.addEventListener('click', () => {
    if(!calcBool)
    {
        operator = "-";
        value1 = calcDisplay.innerHTML;
        calcDisplay.innerHTML += '-';
        calcDisplaytop.innerHTML = value1 + operator;
        calcDisplay.innerHTML = 0;
        decimalBool = false;
        calcBool = true;
    }
    else
    calcDisplay.innerHTML += '';
})
module.addEventListener('click', () => {
    if(!calcBool)
    {
        operator = "%";
        value1 = calcDisplay.innerHTML;
        calcDisplay.innerHTML += '%';
        calcDisplaytop.innerHTML = value1 + operator;
        calcDisplay.innerHTML = 0;
        decimalBool = false;
        calcBool = true;
    }
    else
    calcDisplay.innerHTML += '';
})
del.addEventListener('click', () => {
    let x = calcDisplay.innerHTML;
    calcDisplay.innerHTML == 0  ? 0 : x = (x.toString().slice(0, -1));
    Number(x) ? calcDisplay.innerHTML = Number(x) : calcDisplay.innerHTML = 0;
})
equal.addEventListener('click', () => {
    if(calcBool)
    {   
        value2 = calcDisplay.innerHTML;
        calcDisplaytop.innerHTML = value1 + operator + value2;
        console.log(value1 + operator + value2)
        calcDisplay.innerHTML = operate(Number(value1), operator, Number(value2))
        value1 = value2;
        value2 = 0;
        calcBool = false;
    }
})