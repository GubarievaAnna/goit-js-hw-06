function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const divForFillEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", () => {
  if (inputEl.value < 1) {
    return alert("Input value > 0");
  }
  return createBoxes(inputEl.value);
});

function createBoxes(amount) {
  let width = 20;
  let height = 20;
  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${(width += 10)}px`;
    divEl.style.height = `${(height += 10)}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divForFillEl.append(divEl);
  }
}
buttonDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divForFillEl.innerHTML = "";
}
