function button(a) {
    document.getElementById("solution").value += a;
}
function answer(s) {
    
    const r = [];
    let number = '';
    for (const char of s) {
        if ('%*/+-'.indexOf(char) > -1) {
            if (number === '' && char === '-') {
                number = '-';
            } else {
                r.push(parseFloat(number), char);
                number = "";
            }
        } else {
            number += char;
        }
    }
    if (number !== '') {
        r.push(parseFloat(number));
    }
    return r;
}

function calculate(numbers) { 
    
    const operatorPrecedence = [{
        '%': function (a, b) {
            return a % b
        }
    },
    {
        '*': function (a, b) {
            return a * b
        },
        'x': function (a, b) {
            return a * b
        },
        '/': function (a, b) {
            return a / b
        },
    },
    {
        '+': function (a, b) {
            return a + b
        },
        '-': function (a, b) {
            return a - b
        }
    }
    ];
    let operator;
    for (const operators of operatorPrecedence) { debugger;
        const newNumbers = [];
        for (const number of numbers) {
            if (number in operators) {
                operator = operators[number];
            } else if (operator) {
                newNumbers[newNumbers.length - 1] =
                    operator(newNumbers[newNumbers.length - 1], number);
                operator = null;
            } else {
                newNumbers.push(number);
            }
        }
        numbers = newNumbers;
    }
    if (numbers.length > 1) {

        return numbers;
    } else {

        document.getElementById('solution').value = numbers[0];
    }
}
function solve() {
    let a = document.getElementById('solution').value;
    calculate(answer(a));
}
function clr() {
    document.getElementById("solution").value = "";
}
