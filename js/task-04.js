let counterValue = 0;

const numEl = document.querySelector('#value')
const decEl = document.querySelector('button[data-action="decrement"]')

const incEl = document.querySelector('button[data-action="increment"]')

function decrementNum (){
 numEl.textContent = counterValue -= 1
}
decEl.addEventListener('click', decrementNum)


incEl.addEventListener('click', incrementNum)

function incrementNum (){
    numEl.textContent = counterValue += 1
   }



console.log("🚀 ~ file: task-04.js ~ line 2 ~ counterValue", counterValue);
