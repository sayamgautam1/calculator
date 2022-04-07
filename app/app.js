let displayScreenEl = document.getElementById("screen");
let buttonEl = document.querySelectorAll("button");
let numberEl = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation");
let resultEl = document.querySelector("#result");
let clearAllEl = document.getElementById("clear");
let arrayValues = [];

buttonEl.forEach((btn) => {
  btn.addEventListener("click", function () {
    let values = btn.innerText;
    arrayValues.push(values);
    let displayValues = arrayValues.join("");
    displayScreenEl.innerText = displayValues;
    let type = btn.getAttribute("class");
    if (type === "clear") {
      clearContent();
    } else if (type === "number") {
      if (num1 === 0) {
        num1 = parseInt(btn.innerText);
      } else num2 = parseInt(btn.innerText);
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
      displayScreenEl.innerText = addition(a, b);
      break;
    case "-":
      displayScreenEl.innerText = subtraction(a, b);
      break;
    case "*":
      displayScreenEl.innerText = multiply(a, b);
      break;
    case "÷":
      displayScreenEl.innerText = division(a, b);
      break;
    case "%":
      displayScreenEl.innerText = percentage(a, b);
      break;
    default:
      null;
  }
}
function clearContent() {
  displayScreenEl.textContent = "0";
  arrayValues = [];
}
