import { Medicamento } from "./medicamento.js";

const medicamentos = [];

export const Inventario = {
    agregarMedicamento: (id, nombre, precio, stock) => {
        const medicamento = new Medicamento(id, nombre, precio, stock);
        medicamentos.push(medicamento);
    },
    buscarMedicamento: (id) => {
        return medicamentos.find((m) => m.id === id);
    },
    mostrarInventario: () => {
        if (medicamentos.length === 0) {
            console.log("No hay medicamentos en el inventario.");
            return;
        }

        medicamentos.forEach(m => {
            m.mostrarDetalles();
        });

        return medicamentos;
    },
    actualizarStock: (id, cantidad) => {
        const medicamento = Inventario.buscarMedicamento(id);

        if (!medicamento) {
            console.log("Medicamento no encontrado");
            return false;
        }

        if (medicamento.stock < cantidad) {
            console.log("La cantidad no puede ser mayor al stock disponible");
            return false;
        }

        medicamento.stock -= cantidad;
        console.log(`Stock actualizado. Nuevo stock de ${medicamento.nombre}: ${medicamento.stock}`);
        return true;
    }
}