function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const textColorHex = document.querySelector(".color");
buttonChangeColor.addEventListener("click", onButtonChangeColorClick);

function onButtonChangeColorClick() {
  const newColorBody = getRandomHexColor();
  document.body.style.backgroundColor = newColorBody;
  textColorHex.textContent = newColorBody;
}
