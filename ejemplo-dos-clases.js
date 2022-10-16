class Productos {

    static id = 3

    constructor(nombre, precio) {
        this.id = Productos.newId()
        this.nombre = nombre
        this.precio = Number(precio)
    }

    static newId() {
        return ++Productos.id
    }
}