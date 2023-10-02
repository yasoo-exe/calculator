let sum = (a, b) => {
  return Math.round((a + b) * 1000) / 1000;
};

let subtract = (a, b) => {
  return Math.round((a - b) * 1000) / 1000;
};

let multiply = (a, b) => {
  return Math.round(a * b * 1000) / 1000;
};

let divide = (a, b) => {
  return Math.round((a / b) * 1000) / 1000;
};

let inputBox = document.querySelector(".input-container input");

let digits = document.querySelectorAll(".digits");
Array.from(digits).forEach((x) =>
  x.addEventListener("click", () => {
    inputBox.value += x.innerText;
  })
);

document.querySelector(".clear").addEventListener("click", () => {
  inputBox.value = "";
});

document.querySelector(".backspace").addEventListener("click", () => {
  let tobeCleared = inputBox.value;
  inputBox.value = tobeCleared
    .split("")
    .splice(0, tobeCleared.length - 1)
    .join("");
});
