const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsAllRef = document.querySelectorAll("#categories > .item");

itemsAllRef.forEach((el) => {
  const titleEl = el.querySelector("h2");
  const listEl = el.querySelector("ul");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listEl.children.length}`);
});
