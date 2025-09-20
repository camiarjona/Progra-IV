export class Medicamento {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    mostrarDetalles() {
        console.log(`Medicamento: | ID: ${this.id} | Nombre: ${this.nombre} | Precio: $${this.precio} | Stock: ${this.stock}`); 
    }
}