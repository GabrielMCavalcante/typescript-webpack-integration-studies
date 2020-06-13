export function formData(form: HTMLFormElement) {
    const inputs = form.querySelectorAll('input')
    const values: {[prop: string]: string} = {}

    inputs.forEach(input => {
        values[input.id] = input.value
    })

    return values
}