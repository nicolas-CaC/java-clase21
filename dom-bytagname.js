const smallTags = document.getElementsByTagName('small')

for (let posicion in smallTags) {
    // SI YO UTILIZO POSICIóN COMO íNDICE EL VALOR DE POSICIóN NO SOLO SERáN LAS POSICIONES,
    //SINO TAMBIéN LOS MéTODOS, POR ESO LUEGO DEL 2 ME MUESTRA LENGTH, ITEM, NAMEDITEM
    console.log(posicion)

    // POR LO QUE UTILIZO !isNaN(posicion) PARA PREGUNTAR: SI ES UN NúMERO ENTONCES PROCEDE
    // A UTILIZAR POSICIóN COMO íNDICE DE LOS ARRAYS, DE LO CONTRARIO TIRARá ERROR POR QUERER
    // BUSCAR LA POSICIóN LENGTH, ITEM, NAMEDITEM QUE AL NO SER NúMEROS NO EXISTEN
    if (!isNaN(posicion)) {
        smallTags[posicion].innerText = `Tags: ${contenido[posicion].tags}`
    }
}