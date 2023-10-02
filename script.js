function operations() {
  return {
    add: (a, b) => Math.round((a + b) * 1000) / 1000,
    subtract: (a, b) => Math.round((a - b) * 1000) / 1000,
    multiply: (a, b) => Math.round(a * b * 1000) / 1000,
    divide: (a, b) => Math.round((a / b) * 1000) / 1000,
  };
}

let calculate = operations();

let inputBox = document.querySelector(".input-container input");

//dynamic expression updates
let digits = document.querySelectorAll(".digits");
Array.from(digits).forEach((x) =>
  x.addEventListener("click", () => {
    inputBox.value += x.innerText;
  })
);

//clear
document.querySelector(".clear").addEventListener("click", () => {
  inputBox.value = "";
});

//backspace
document.querySelector(".backspace").addEventListener("click", () => {
  let tobeCleared = inputBox.value;
  inputBox.value = tobeCleared
    .split("")
    .splice(0, tobeCleared.length - 1)
    .join("");
});
