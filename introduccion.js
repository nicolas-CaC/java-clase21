// GETELEMENTBYID

const bloque1 = document.getElementById('primerBloque')

const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const boton4 = document.getElementById('boton4')
const boton5 = document.getElementById('boton5')

boton1.onclick = () => {
    bloque1.classList.add('bg-success', 'text-light')
}

// QUERYSELECTOR

const bloque2 = document.querySelector('#segundoBloque')

boton2.onmouseover = () => {
    bloque2.innerHTML = '<b>Mouse encima</b>'
}

boton2.onmouseleave = () => {
    bloque2.innerText = 'El mouse se fue'
}

//

const navItems = document.querySelectorAll('.nav-item')

let boton2state = false

boton2.onclick = () => {

    if (!boton2state) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.backgroundColor = 'darkblue'
            navItems[i].style.fontWeight = 'normal'
        }
    } else {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.backgroundColor = 'black'
            navItems[i].style.fontWeight = 'bold'
        }
    }

    boton2state = !boton2state
}


//BYLCASSNAME

const bloque3 = document.getElementsByClassName('clase3')

boton3.addEventListener('click', function () {
    bloque3[0].className = 'clase3 OTRACLASEQUENOEXISTE bg-primary bg-gradient text-white col d-flex py-4 justify-content-center border border-2 rounded justify-items-center'
})

//BYTAGNAME

const bloque4 = document.getElementsByTagName('blockquote')

boton4.addEventListener('click', () => {
    console.log('tiene id?', bloque4[0].hasAttribute('id'))
    console.log('tiene class?', bloque4[0].hasAttribute('class'))
    bloque4[0].setAttribute('id', 'OTROID')
    boton5.removeEventListener('click', boton5Fn)
    Swal.fire({
        icon: 'success',
        title: 'Desactivado',
        text: 'El botón 5 se ha desactivado',
        footer: '<a href="index.html">Vamos al inicio</a>'
    })

})

// boton5

function boton5Fn() {
    Swal.fire(
        'Esto es SweetAlert2',
        'Aún no se ha clickeado el botón 4',
    )
}

boton5.addEventListener('click', boton5Fn)