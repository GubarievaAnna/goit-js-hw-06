const inputNameEl = document.querySelector("#name-input");
const greetingNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", onNameElInput);

function onNameElInput() {
  greetingNameEl.textContent = inputNameEl.value;
  if (inputNameEl.value === "") {
    greetingNameEl.textContent = "Anonymous";
  }
}
