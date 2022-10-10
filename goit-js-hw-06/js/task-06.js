const valLength = document.querySelector('input[data-length]')
const textInput = document.querySelector('#validation-input')


let valueLength = 0;

valLength.addEventListener('input',valueLengthFunc )

function valueLengthFunc(event){
valueLength = event.currentTarget.value.length
console.log("🚀 ~ file: task-06.js ~ line 11 ~ valueLengthFunc ~ valueLength", valueLength);

}


valLength.addEventListener('blur', validForm)

function validForm(){
if(valueLength == valLength.dataset.length){
    valLength.classList.remove('invalid')
    valLength.classList.add('valid')
}
if (valueLength != valLength.dataset.length) {
    valLength.classList.remove('valid')
    textInput.classList.add('invalid')
} 

}

