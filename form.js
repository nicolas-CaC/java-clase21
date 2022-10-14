const form = document.forms.formulario
const otroFormu = document.getElementById('otroFormu')

form.onsubmit = (e) => {
    e.preventDefault()

    const datos = {
        nombre: form.nombre.value,
        email: form.email.value,
        password: form.pass.value,
        radio: form.radio.value,
        checking: form.chequeo.checked
    }

    localStorage.setItem('elformulario', JSON.stringify(datos))
    sessionStorage.setItem('elsession', 'soy la sesion')
    location.href = 'index.html'
}
