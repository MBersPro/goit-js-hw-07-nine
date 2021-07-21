const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
ingredients.forEach(item =>{
  const variable = document.createElement('li')
  variable.textContent = item
document.querySelector('ul#ingredients').appendChild(variable)
  console.log(variable)
})