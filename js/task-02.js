const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
ingredients.forEach(item =>{
  const variable = document.createElement('li');
  variable.textContent = item;
  console.log(variable);
  document.querySelector('#ingredients').append(variable);
})
