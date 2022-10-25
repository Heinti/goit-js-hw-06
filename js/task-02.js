const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients') 


let liEl = []


for (let i = 0; i < ingredients.length; i++) {
  const forElement = document.createElement('li')

  forElement.classList.add('item')
forElement.textContent = ingredients[i]
  
liEl.push(forElement)
console.log(forElement)
  
}


// console.log(liEl)


ulEl.append(...liEl)





// const grocery = ingredients.map((tech) => `<li class ="item">${tech}</li>`).join('');

// ulEl.insertAdjacentHTML("afterbegin", grocery)

// console.log(ulEl)