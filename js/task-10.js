function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
input: document.querySelector('input'),
form: document.querySelector('#control'),
boxes: document.querySelector('#boxes'),
create: document.querySelector('button[data-create]'),
destroy: document.querySelector('button[data-destroy]')
}

let amountBoxes = 0;

refs.input.addEventListener('input', getNumber)
function getNumber(event){
amountBoxes = event.currentTarget.value
}

function createBoxes(amount){
  const boxesArr = [];
  let size = 30;

  for (let i = 0; i < amount; i+= 1) {
    const newBox = document.createElement('div')
    newBox.style.width = `${size}px`
    newBox.style.height = `${size}px`
    newBox.style.backgroundColor = getRandomHexColor()
    
    size += 10
    boxesArr.push(newBox)
    
    console.log(boxesArr)
  
  }
  boxes.append(...boxesArr)
}

refs.create.addEventListener('click', createElements)
function createElements(){
  createBoxes(amountBoxes)
  
}

refs.destroy.addEventListener('click', destroyElements)
function destroyElements(){
  refs.boxes.innerHTML = ""
}