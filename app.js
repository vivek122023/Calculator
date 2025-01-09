const resultElement = document.getElementById('result');
const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numbersBtns = document.querySelectorAll('.number');

let result = '';
let operation = '';
let previousOperand = 0;
const appendNumber = (number) => {
    if (number == '.' && result.includes('.')) return;
    result += number;
    updateDisplay();
}

const updateDisplay = () => {
    if (operation) {
        resultElement.innerText = `${previousOperand} ${operation} ${result}`;
    } else {
        resultElement.innerText = result;
    }
}

const selectOperator = (operatorValue) => {
    if (result == '') return;
    if (result != '' && previousOperand != '') {
        calculateResult();
    }
    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();

}
const calculateResult = () => {
    let evaluteResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);

    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            evaluteResult = prev + current;
            break;
        case '-':
            evaluteResult = prev - current;
            break;
        case '*':
            evaluteResult = prev * current;
            break;
        case '/':
            evaluteResult = prev / current;
            break;
        default:
            return;
    }
    result = evaluteResult.toString();
    operation = '';
    previousOperand = '';

}

numbersBtns.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        // console.log(button.innerText);
    })
})

decimalBtn.addEventListener('click', () => appendNumber('.'));

addBtn.addEventListener('click', () => selectOperator('+'));
subtractBtn.addEventListener('click', () => selectOperator('-'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));
divideBtn.addEventListener('click', () => selectOperator('/'));

equalBtn.addEventListener('click', () => {
    if (result === '') return;
    calculateResult();
    updateDisplay();
});
// function to display clear
clearBtn.addEventListener('click', () => {
    result = '';
    previousOperand = '';
    operation = '';
    updateDisplay();
});
// function to delete last character from display
deleteBtn.addEventListener('click', () => {
    if (result == '') return;
    result = result.slice(0, -1);
    updateDisplay();
});





