// Variables to hold the operands and operator
let firstOperand = "";
let secondOperand = "";
let operator = "";
let resultDisplayed = false;

// Function to append numbers to the display
function insert(value) {
  const display = document.getElementById("display");

  // Clear display if result was previously shown and start fresh
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }

  // Append the clicked number or dot to the display
  display.value += value;

  // Update the correct operand
  if (!operator) {
    firstOperand += value;
  } else {
    secondOperand += value;
  }
}

// Function to set the operator
function setOperator(op) {
  const display = document.getElementById("display");

  // Only set the operator if there is a first operand and no second operand
  if (firstOperand && !operator) {
    operator = op;
    display.value += ` ${op} `;
  }
}

// Clear the display and reset all variables
function clearDisplay() {
  document.getElementById("display").value = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  resultDisplayed = false;
}

// Delete the last character
function deleteLast() {
  const display = document.getElementById("display");
  const currentValue = display.value.trim();

  // Only delete if there is content
  if (currentValue) {
    // Remove the last character from the display
    display.value = currentValue.slice(0, -1);

    // Adjust the stored operands or operator accordingly
    if (secondOperand) {
      secondOperand = secondOperand.slice(0, -1);
    } else if (operator) {
      operator = "";
    } else if (firstOperand) {
      firstOperand = firstOperand.slice(0, -1);
    }
  }
}

// Perform the calculation without eval
function calculate() {
  // Convert operands to numbers
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);

  // Result variable
  let result;

  // Perform calculation based on the operator
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      result = "Error";
  }

  // Display the result
  document.getElementById("display").value = result;
  firstOperand = result.toString();
  secondOperand = "";
  operator = "";
  resultDisplayed = true;
}
