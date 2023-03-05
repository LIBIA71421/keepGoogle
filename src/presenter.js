import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstM = document.querySelector("#primer-numeroM");
const secondM = document.querySelector("#segundo-numeroM");
const formM = document.querySelector("#multiplicar-form");
const divM = document.querySelector("#resultado-divM");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formM.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);

  divM.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
