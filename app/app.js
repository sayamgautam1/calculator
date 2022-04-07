let displayScreenEl = document.getElementById("screen");
let buttonEl = document.querySelectorAll("button");
let numberEl = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation");
let resultEl = document.querySelector("#result");
let clearAllEl = document.getElementById("clear");
let displayValues = [];

buttonEl.forEach((btn) => {
  btn.addEventListener("click", function () {
    let value = btn.innerText;
    let type = btn.getAttribute("class");
    if (type === "clear") {
      clearContent();
    } else if (type === "number") {
      if (num1 === 0) {
        num1 = btn.innerHTML;
      } else num2 = btn.innerHTML;
    } else if (type === "operation") {
      operation = btn.innerText;
    } else if (type === "equals") {
      console.log(operate(operation, num1, num2));
    } else {
      return;
    }
  });
});

// operation function of the calculator
let num1 = 0;
let num2 = 0;
let operation = "";

function addition(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multuply(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}
function percentage(x, y) {
  return x % y;
}
function operate(currentOperator, a, b) {
  switch (currentOperator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "*":
      return multiply(a, b);
    case "÷":
      return division(a, b);
    case "%":
      return percentage(a, b);
    default:
      null;
  }
}
function clearContent() {
  displayScreenEl.textContent = "0";
  displayValues = [];
}
