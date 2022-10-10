const inputFont = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')



inputFont.addEventListener('input', changeFont)

function changeFont(event){
 spanText.style.fontSize = `${event.currentTarget.value}px`
}



