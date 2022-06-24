const inputRangeEl = document.querySelector("#font-size-control");
const textFontChange = document.querySelector("#text");
inputRangeEl.addEventListener("input", onRangeElInput);

function onRangeElInput() {
  textFontChange.style.fontSize = `${inputRangeEl.value}px`;
}
