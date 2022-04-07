let displayScreenEl = document.getElementById("screen");
let buttonEl = document.querySelectorAll("button");
let numberEl = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation");
let resultEl = document.querySelector("#result");
let clearAllEl = document.getElementById("clear");
let displayValues = [];

buttonEl.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (numberEl) {
      console.log(btn.innerText);
    } else if (clearAllEl) {
      clearContent();
      console.log(btn.innerText);
    } else if (operationEl) {
      console.log(btn.innerText);
    } else {
      console.log("helloworld");
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
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
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
