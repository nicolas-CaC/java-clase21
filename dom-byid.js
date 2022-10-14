const titulo = document.getElementById('titulo')
// console.log(titulo)

const boton = document.getElementById('boton')
// console.log(boton)

const busqueda = document.getElementById('busqueda')
// console.log(busqueda)

boton.onclick = (e) => {
    e.preventDefault()
    titulo.innerText = busqueda.value
}

function cambiarH1() {
    const h1 = document.getElementById('h1')
    // console.log(h1)
    h1.innerText = busqueda.value
    if (h1.innerText === '') h1.innerText = '\n'
}

// busqueda.addEventListener('change', cambiarH1)
// busqueda.addEventListener('keypress', cambiarH1)
// busqueda.addEventListener('keydown', cambiarH1)
busqueda.addEventListener('keyup', cambiarH1)
