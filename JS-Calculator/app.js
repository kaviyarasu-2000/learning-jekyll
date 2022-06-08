function button(a) {
    document.getElementById("solution").value += a;
}

function answer(s) {

    var r = [];
    var number = '';
    for (let char of s) {
        if ('%*/+-'.indexOf(char) > -1) {
            if (number === '' && (char === '-' || char === '+')) {
                number = char;
            } else {
                r.push(parseFloat(number), char);
                number = '';
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

function plusminus() {
    let inpute = document.getElementById("solution").value;
    let number = '';
    let r = [];
    for (let char of inpute) {
        if ('+-*x/%'.indexOf(char) > -1) {
            if (number === '' && (char === '-' || char === '+')) {
                number = char;
            } else {
                r.push(parseFloat(number), char);
                number = '';
            }
        } else {
            number += char;
        }
    }

    if (number !== '') {
        r.push(parseFloat(number));

        if (r[r.length - 1] > 0) {
            
            r[r.length - 1] = -Math.abs(r[r.length - 1])
        } else {
            r[r.length - 1] = +Math.abs(r[r.length - 1])
        }
        r = r.toString();
        r = r.replace(/,/g, '');
        document.getElementById('solution').value = r;
    }
}

function calculate(numbers) {
    const operatorPrecedence = [{
            '%': function(a, b) {
                return (a / 100) * b
            }
        },
        {
            '*': function(a, b) {
                return a * b
            },
            '/': function(a, b) {
                return a / b
            },
        },
        {
            '+': function(a, b) {
                return a + b
            },
            '-': function(a, b) {
                return a - b
            }

        }
    ];
    let operator;
    for (let operators of operatorPrecedence) { 
        let newNumbers = [];
        for (let number of numbers) {
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

        x=Number(numbers);
        if(typeof x == 'number' && !isNaN(x)){
        if (Number.isInteger(x)) {
            document.getElementById('solution').value = numbers;
        }
        else {
            document.getElementById('solution').value = parseFloat(numbers).toFixed(2);
        }
    
    } 
    }
}

function solve() {
    let a = document.getElementById('solution').value;
    calculate(answer(a));
}

function clr() {
    document.getElementById("solution").value = "";
}