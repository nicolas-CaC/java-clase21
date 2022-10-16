// Mostrar productos

const show = () => {

    let text = ''

    for (item of list) {
        const iva = (item.precio / 100) * 21
        const total = (item.precio / 100) * 21 + item.precio

        const line = `${item.nombre}:
- id: ${item.id}
- precio: $${item.precio.toFixed(2)}
- iva: $${iva.toFixed(2)}
- total: $${total.toFixed(2)}`

        text += line + '\n\n'
    }

    text += total()

    showList.innerHTML = text
}

// Total

const total = () => {
    const total = `\nTotal (sin IVA): $${list
        .reduce((total, producto) => total += producto.precio, 0)
        .toLocaleString('es-AR')}`

    return total
}

// Agregar producto

const addProduct = () => {
    if (nombreProducto.value !== '' &&
        precioProducto.value !== '') {
        const nuevoProducto = new Productos(nombreProducto.value, precioProducto.value)
        list.push(nuevoProducto)
        show()
    }
}

// Borrar producto

const delProduct = () => {
    if (list.length > 0) {
        list.pop()
        show()
    }
}

addButton.onclick = () => { addProduct() }
delButton.addEventListener('click', delProduct)

// Inicio =================================

show()