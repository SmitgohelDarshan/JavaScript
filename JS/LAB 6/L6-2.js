const num1 = 5
const num2 = 10;
const operator = '*';

function arithmeticOperation(a, b, operator) {
    if (operator === '+') {
      return a + b;
    } 
    else if (operator === '-') {
      return a - b;
    } 
    else if (operator === '*') {
      return a * b;
    } 
    else if (operator === '/') {
      if (b !== 0) {
        return a / b;
      } else {
        return 'Error: Division by zero';
      }
    } 
    else {
      return 'Invalid operator';
    }
  }
  
 
  console.log(`The result of ${num1} ${operator} ${num2} is: ${arithmeticOperation(num1, num2, operator)}.`);
  