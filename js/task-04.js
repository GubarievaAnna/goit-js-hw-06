let counterValue = 0;
const buttonDecrementEl = document.querySelector('[data-action = "decrement"]');
const buttonIncrementEl = document.querySelector('[data-action = "increment"]');
const textValueEl = document.querySelector("#value");

buttonDecrementEl.addEventListener("click", onButtonDecrementClick);
buttonIncrementEl.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  textValueEl.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  textValueEl.textContent = counterValue;
}
