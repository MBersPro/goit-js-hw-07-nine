const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector("#ingredients");
const liFunc = ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

ul.append(...liFunc);