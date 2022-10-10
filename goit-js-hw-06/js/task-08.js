const formEl = document.querySelector(".login-form");
// const bReset = document.querySelector('')


formEl.addEventListener("submit", validCheck);

function validCheck(event) {
    event.preventDefault()
  const formElem = event.currentTarget.elements;

  const email = formElem.email.value;
  const pass = formElem.password.value;

const user = {
    email,
    pass
}

if (email ==="" || pass ==="") {
    alert(`Заповни всі поля, крихітко`)
}else{
    console.log(user)
}

event.currentTarget.reset()
}



