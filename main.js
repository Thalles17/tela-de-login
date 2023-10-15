const form = document.getElementById('form')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const btnRegister = document.querySelector('.btn-register')

//prevenindo o evento que vem padrao do formulario
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    
    checkInputUserName()
    checkInputEmailUser()
    checkInputPasswordUser()
})


const checkInputUserName = ()=> {
    const userNameValue = userName.value
    errorInput(userName, 'digite uma nome...')
    console.log(userNameValue)
}

const checkInputEmailUser = ()=> {
    const emailValue = email.value
    console.log(emailValue)
}

const checkInputPasswordUser = ()=> {
    const passwordValue = password.value
    console.log(passwordValue)
}
