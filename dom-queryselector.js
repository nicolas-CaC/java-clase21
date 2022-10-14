// const cards = document.querySelector('.card')
const cards = document.querySelectorAll('.card')
// console.log(cards)

function editarContenido(card, index) {
    // console.log(card, index)
    card.classList.add('border', 'p-2')
    const descripcion = card.children[1].children.item(1)
    // console.log(descripcion)
    descripcion.innerHTML = contenido[index].descripcion
}

cards.forEach((card, index) => {
    // console.log(card.children[1].children.item(1).innerHTML)
    // const a = card.children
    // console.log('a:', a[1].children.namedItem(1))
    editarContenido(card, index)
})
