let display = document.getElementById("display");
let currentOperand = "";
let currentOperation = null;
let previousOperand = "";

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  currentOperation = operation;
  previousOperand = currentOperand;
  currentOperand = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentOperand = result;
  currentOperation = null;
  previousOperand = "";
  updateDisplay();
}

function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentOperand;
}
