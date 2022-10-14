const form = document.forms.formulario
const otroFormu = document.getElementById('otroFormu')

form.onsubmit = (e) => {
    e.preventDefault()
    // console.log(form.nombre.value)
    // console.log(form.email.value)
    // console.log(form.pass.value)
    // console.log(form.radio.value)
    // console.log(form.chequeo.checked)

    const datos = {
        nombre: form.nombre.value,
        email: form.email.value,
        password: form.pass.value,
        radio: form.radio.value,
        checking: form.chequeo.checked
    }

    console.log(datos)
}

function suma(a, b, c) {
    let cuenta = a * b / c

    const titulo = document.getElementById('titulo')
    titulo.innerText = cuenta
}

const recolectarInfo = (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    const gridRadios1 = document.getElementById('gridRadios1').value
    const gridCheck1 = document.getElementById('gridCheck1').checked
    const datos = { nombre, email, pass, gridRadios1, gridCheck1 }
    suma(Boolean(gridCheck1), 2, 847524)
    console.log('formulario: Boton alternativo:', datos)
}

otroFormu.addEventListener('click', recolectarInfo)