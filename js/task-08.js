const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();
  const inputsArray = Array.from(document.querySelectorAll("input"));
  const inputsValuesArray = inputsArray.map((el) => el.value);
  if (inputsValuesArray.includes("")) {
    return alert("Все поля должны быть заполнены");
  }

  const formData = new FormData(event.currentTarget);
  const result = {};
  formData.forEach((value, name) => (result[name] = value));
  console.log(result);
  event.currentTarget.reset();
}
