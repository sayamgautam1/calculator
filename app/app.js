let displayScreenEl = document.getElementById("screen");
let buttonEl = document.querySelectorAll("button");
let numberEl = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation");
let resultEl = document.querySelector("#result");
let clearAllEl = document.querySelector(".clear");

let num1 = "";
let num2 = "";
let operation = "";
let result = "";

/// event listener for each button
numberEl.forEach((num) => {
  num.addEventListener("click", function (e) {
    numChosen(e.target.innerText);
  });
});
// fn to select the clicked num
function numChosen(num) {
  num1 += num;
  displayScreenEl.textContent = num1;
}

//event listen for each opeartion
operationEl.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    operationChosen(e.target.innerText);
  });
});

// fn to select opeation
function operationChosen(operat) {
  // if (num1 === "") {
  //   console.log(result);
  //   // num1 = result;
  //   operation = operat;
  //   displayScreenEl.innerText = operation;
  // } else {
  num2 = num1;
  num1 = "";
  operation = operat;
  displayScreenEl.innerText = operation;
  // }
}

//event listener to equals sign
resultEl.addEventListener("click", () => {
  let resultNumber = operate(operation, parseInt(num1, 10), parseInt(num2, 10));
  console.log(resultNumber);
  result = resultNumber.toString();
  displayScreenEl.innerText = result;
  num1 = result;
  num2 = "";
});

//event listener to clear the display

clearAllEl.addEventListener("click", clearContent);

// operation function of the calculator

function addition(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}
function percentage(x, y) {
  return (x % y) * 100;
}
function operate(currentOperator, a, b) {
  switch (currentOperator) {
    case "+":
      return addition(a, b);
      break;
    case "-":
      return subtraction(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return division(a, b);
      break;
    case "%":
      return percentage(a, b);
      break;
    default:
      null;
  }
}

// clear all fn
function clearContent() {
  displayScreenEl.textContent = "0";
  num1 = "";
  num2 = "";
  operation = "";
}
