
class formValidation {
    constructor(form, name, subname, email, password, btn) {
        this.form = document.querySelector(form),
            this.name = document.querySelector(name),
            this.subname = document.querySelector(subname),
            this.email = document.querySelector(email),
            this.password = document.querySelector(password),
            this.btn = document.querySelector(btn)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {

        if (!this.name.value) {
            event.preventDefault()
            this.name.style.borderColor = 'hsl(0, 100%, 74%)'
            this.name.nextElementSibling.innerText = 'First Name cannot be empty.'
            this.name.setAttribute('placeholder', '')
        } else {
            this.name.style.borderColor = 'hsl(246, 25%, 77%)'
            this.name.nextElementSibling.innerText = ''
        }

        if (!this.subname.value) {
            event.preventDefault()
            this.subname.style.borderColor = 'hsl(0, 100%, 74%)'
            this.subname.nextElementSibling.innerText = 'Last Name cannot be empty.'
            this.subname.setAttribute('placeholder', '')
        } else {
            this.subname.style.borderColor = 'hsl(246, 25%, 77%)'
            this.subname.nextElementSibling.innerText = ''
        }

        if (!this.email.value) {
            event.preventDefault()
            this.email.style.borderColor = 'hsl(0, 100%, 74%)'
            this.email.nextElementSibling.innerText = 'Looks like this is not an email.'
            this.email.setAttribute('placeholder', 'email@example.com')
            this.email.classList.add('invalid')

        } else if (!this.email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            event.preventDefault()
            this.email.style.borderColor = 'hsl(0, 100%, 74%)'
            this.email.nextElementSibling.innerText = 'Looks like this is not an email.'
            this.email.setAttribute('placeholder', '')
        } else {
            this.email.style.borderColor = 'hsl(246, 25%, 77%)'
            this.email.nextElementSibling.innerText = ''
        }

        if (!this.password.value) {
            event.preventDefault()
            this.password.style.borderColor = 'hsl(0, 100%, 74%)'
            this.password.nextElementSibling.innerText = 'Password cannot be empty.'
            this.password.setAttribute('placeholder', '')
        } else {
            this.password.style.borderColor = 'hsl(246, 25%, 77%)'
            this.password.nextElementSibling.innerText = ''
        }
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit)
    }
}

const form = new formValidation('[data-form]', '[data-form="name"]', '[data-form="subname"]', '[data-form="email"]', '[data-form="password"]', '[data-form="btn"]')

form.init()


