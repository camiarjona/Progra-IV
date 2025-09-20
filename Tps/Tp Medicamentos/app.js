import { Inventario } from "./inventario.js";
import { Venta } from "./venta.js";

const btnInventario = document.getElementById("btnInventario");
const btnVentas = document.getElementById("btnVentas");

btnInventario?.addEventListener("click", () => {
    window.location.href = "inventario.html";
});

btnVentas?.addEventListener("click", () => {
    window.location.href = "venta.html";
});


if (document.body.id === "inventario") {
    const btnCargar = document.getElementById("btnCargar");
    const btnListado = document.getElementById("btnListado");
    const seccionCargar = document.getElementById("seccionCargar");
    const seccionListado = document.getElementById("seccionListado");

    const form = document.getElementById("formInventario");
    const lista = document.getElementById("listaInventario");

    // mostrar formulario
    btnCargar.addEventListener("click", () => {
        seccionCargar.style.display = "block";
        seccionListado.style.display = "none";
    });

    // mostrar listado
    btnListado.addEventListener("click", () => {
        seccionCargar.style.display = "none";
        seccionListado.style.display = "block";
        mostrarInventario();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = document.getElementById("id").value;
        const nombre = document.getElementById("nombre").value;
        const precio = Number(document.getElementById("precio").value);
        const stock = Number(document.getElementById("stock").value);

        Inventario.agregarMedicamento(id, nombre, precio, stock);

        form.reset();
    });

    function mostrarInventario() {
        const lista = document.getElementById("listaInventario");
        lista.innerHTML = "";

        Inventario.mostrarInventario().forEach(m => {
            const li = document.createElement("li");
            li.textContent = `${m.nombre} | $${m.precio} | Stock: ${m.stock}`;
            lista.appendChild(li);
        });
    }

}