const tarjetitas = document.getElementById('tarjetitas')

const mapeoTarjetas = nuevasTarjetas.map(tarjeta =>
    `<div class='col-sm-12 col-md-6 col-lg-3'>
        <div class="card">
            <img src="${tarjeta.img}" alt="card-group-image"
                style="height: 200px!important; object-fit: cover">
            <div class="card-body">
                <h5 class="card-title">${tarjeta.titulo}</h5>
                <p class="card-text">${tarjeta.descripcion}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">${tarjeta.pie}</small>
            </div>
        </div>
    </div>`).join('')

console.log(mapeoTarjetas)

tarjetitas.innerHTML = mapeoTarjetas