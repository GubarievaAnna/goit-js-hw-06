const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createItems = (options) => {
  return options.map((el) => {
    const itemIngredientEl = document.createElement("li");
    itemIngredientEl.textContent = el;
    itemIngredientEl.classList.add("item");
    return itemIngredientEl;
  });
};

const listEl = document.querySelector("#ingredients");
const itemsEl = createItems(ingredients);
listEl.append(...itemsEl);
