import { formData } from 'utils/Forms/forms'

const form = document.querySelector('form')!

form.addEventListener('submit', e => {
    e.preventDefault()
    const data = formData(form)
    console.log(data)
})