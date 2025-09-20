import { Inventario } from "./inventario.js";

const ventas = [];

export class Venta {
    constructor(medicamento, cantidad) {
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total = medicamento.precio * cantidad;
    }

    static registrarVenta(medicamento, cantidad){
        // actualizamos el stock
        const actualizado = Inventario.actualizarStock(medicamento.id, cantidad);

        if(!actualizado) return;

        // registramos la venta
        const nuevaVenta = new Venta(medicamento, cantidad)
        ventas.push(nuevaVenta);

        console.log(`Venta registrada: ${medicamento.nombre} x${cantidad} - Total: $${nuevaVenta.total}`);
    }
}



