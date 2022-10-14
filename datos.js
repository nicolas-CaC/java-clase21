const titulos = ['Código', 'One Piece', 'Marvel']

const contenido = [
    {
        descripcion: 'Es una imagen de código',
        tags: '#Programación'
    },
    {
        descripcion: 'Es una imagen de One Piece ',
        tags: '#Anime'
    },
    {
        descripcion: 'Es una imagen de Marvel',
        tags: '#Comics'
    },
]

const nuevasTarjetas = [
    {
        img: 'https://hotmart.com/media/2021/01/670x419-ES-Que-es-Google-Fotos-y-para-que-sirve.webp',
        titulo: 'Titulo 1',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolorem debitis delectus a maxime. Neque veritatis, animi vitae at, quo velit, cum dolorem odit quidem similique eaque nam dolore quaerat.',
        pie: '#titulo1'
    },
    {
        img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png',
        titulo: 'Titulo 2',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolorem debitis delectus a maxime. Neque veritatis, animi vitae at, quo velit, cum dolorem odit quidem similique eaque nam dolore quaerat.',
        pie: '#titulo2'
    },
    {
        img: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/solar-orbiter-toma-imagenes-del-sol-como-nunca-antes/9437612-1-esl-MX/Solar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes.jpg',
        titulo: 'Titulo 3',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolorem debitis delectus a maxime. Neque veritatis, animi vitae at, quo velit, cum dolorem odit quidem similique eaque nam dolore quaerat.',
        pie: '#titulo3'
    }
]

let datosStorage = JSON.parse(localStorage.getItem('elformulario'))

console.log(typeof datosStorage)
console.log(datosStorage)

if (datosStorage) {
    const h1 = document.getElementById('h1')
    h1.innerText = datosStorage.nombre
}

// localStorage.getItem(clave)
// localStorage.setItem(clave, valor)
// SessionStorage.getItem(clave)
// SessionStorage.setItem(clave, valor)
// Para convertir elemento a cadena: JSON.stringify(elemento)
// Para convertir cadena a elemento: JSON.parse(cadena)