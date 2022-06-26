const inputTextEl = document.querySelector("#validation-input");
inputTextEl.addEventListener("blur", onInputTextElBlur);

function onInputTextElBlur() {
  if (inputTextEl.value.length === Number(inputTextEl.dataset.length)) {
    inputTextEl.classList.remove("invalid");
    inputTextEl.classList.add("valid");
  } else {
    inputTextEl.classList.remove("valid");
    inputTextEl.classList.add("invalid");
  }
}
