const cardTitles = document.getElementsByClassName('card-title')
// console.log('Este es el valor de cardTitles:', cardTitles)

// for (let i = 0; i < cardTitles.length; i++) {
// console.log(cardTitles[i])
// cardTitles[i].innerHTML = 'jojo'
// console.log(cardTitles.item(i))
// cardTitles.item(i).innerHTML = titulos[i]
// }

for (let indice in titulos) {
    cardTitles[indice].innerHTML = `<i>${titulos[indice]}</i>`
}

// NO RECOMENDADO
// let indice = 0
// for (title of cardTitles) {
//     console.log(title)
//     title.innerHTML = titulos[indice++]
// }
