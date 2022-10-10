function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color')
const bntChange = document.querySelector('.change-color')
const body = document.querySelector('body')

bntChange.addEventListener('click', randomColor)

function randomColor(){
  body.style.backgroundColor = getRandomHexColor()

  spanColor.textContent = getRandomHexColor()
}








console.log("🚀 ~ file: task-09.js ~ line 2 ~ getRandomHexColor ~ getRandomHexColor", getRandomHexColor());