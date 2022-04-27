    function button(val)
         {
             document.getElementById("solution").value+=val;
         }
         function answer(s) {
         const r = [];
         let number = " ";
         for (const character of s) {
             if ('%*/+-'.indexOf(character) > -1) {
                 if (number === '' && character === '-') {
                     number = '-';
                 } else {
                     r.push(parseFloat(number), character);
                     number = "";
                 }
             } else {
                 number += character;
             }
         }
         if (number !== '') {
             r.push(parseFloat(number));
         }
         return r;
         }
         
         function calculate(numbers) {
         const operatorPrecedence = [{'%': (a, b) => a % b},{'*': (a, b) => a * b, '/': (a, b) => a / b},
                                     {'+': (a, b) => a + b, '-': (a, b) => a - b}];
         let operator;
         for (const operators of operatorPrecedence) {
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
         function solve(){
         let a = document.getElementById('solution').value;
             calculate(answer(a));
         }
         function clr(){
             document.getElementById("solution").value="";
         }