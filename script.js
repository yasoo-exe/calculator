"use strict";

function operations(operand, first, second) {
  return {
    "+": (a, b) => Math.round((a + b) * 1000) / 1000,
    "-": (a, b) => Math.round((a - b) * 1000) / 1000,
    "*": (a, b) => Math.round(a * b * 1000) / 1000,
    "/": (a, b) =>
      b === 0 ? "ain't gonna happen!" : Math.round((a / b) * 1000) / 1000,
  };
}
let operate = operations();

//selecting elements from html
let inputBox = document.querySelector("#expression");
let answer = document.querySelector("#answer");
let operators = Array.from(document.querySelectorAll(".operators"));
let equal = document.querySelector(".equal");

//populating the screen
let digits = document.querySelectorAll(".digits");
Array.from(digits).forEach((x) =>
  x.addEventListener("click", () => {
    inputBox.value += x.innerText;
  })
);

//clear button to set everything to default
document.querySelector(".clear").addEventListener("click", clear);
function clear() {
  inputBox.value = "";
  answer.value = "";
  count = 0;
}

//backspace to modify expression
document.querySelector(".backspace").addEventListener("click", () => {
  let tobeCleared = inputBox.value;
  inputBox.value = tobeCleared
    .split("")
    .splice(0, tobeCleared.length - 1)
    .join("");
});

//function calling and calculations
let a, b, operand;
let count = 0;

operators.forEach((x) => x.addEventListener("click", evaluateExpression));
equal.addEventListener("click", () => {
  b = Number(inputBox.value);
  if (a && count == 1 && b) {
    let temp = operate[`${operand}`](a, b);
    isNaN(temp) ? (answer.value = "Syntax Error!") : (answer.value = temp);
  } else {
    answer.value = "Syntax Error!";
  }
});
function evaluateExpression() {
  if (count === 0 && inputBox.value !== "") {
    a = Number(inputBox.value);
    operand = this.innerText;
    inputBox.value = "";
    count += 1;
  }
  if (count === 1 && inputBox.value !== "") {
    b = Number(inputBox.value);
    inputBox.value = "";
    a = operate[`${operand}`](a, b);
    isNaN(a) ? (answer.value = "Syntax Error!") : (answer.value = a);
    operand = this.innerText;
  }
}
//

// equal.addEventListener("click", evaluateExpression);

// function evaluateExpression() {
//   if (/^[\d]+(-|\+|\*|\/){1}[\d]+/.test(inputBox.value)) {
//     console.log("valid!");
//   }
// }

// let a, b, operand;
// let count = 0;
// function evaluateExpression() {
//   if (inputBox.value !== "" && /[\d]/g.test(inputBox.value) && count === 0) {
//     a = Number(inputBox.value);
//     operand = this.innerText;
//     inputBox.value = "";
//     count += 1;
//   }
//   if (a && count === 1 && /[\d]/.test(inputBox.value)) {
//     b = Number(inputBox.value);
//     count += 1;
//     if (a & b) {
//       let result = calculate[`${operand}`](a, b);
//       inputBox.value = result;
//       count === 0;
//     }
//   }
//   if (a && b && count === 3) {
//     console.log(calculate.operand(a, b));
//   }
// }

// let validInputValues = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "0",
//   "-",
//   "+",
//   "*",
//   "/",
//   "Backspace",
//   "ArrowRight",
//   "ArrowLeft",
//   "Enter",
//   "CtrlA",
// ];
// let validButtonActions = ["Backspace", "ArrowRight", "ArrowLeft", "Enter"];

//avoid falsy values to be entered via keyboard
// inputBox.addEventListener("keydown", (e) => {
//   if (validInputValues.indexOf(e.key) === -1) {
//     e.preventDefault();
//   }
//   if (e.key === "Enter") {
//     evaluateExpression();
//   }
// });

//dynamic expression updates
