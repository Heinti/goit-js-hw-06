const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients') 

const grocery = ingredients.map((tech) => `<li class ="item">${tech}</li>`).join('');

ulEl.insertAdjacentHTML("afterbegin", grocery)

console.log(ulEl)