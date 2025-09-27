import { ProductService } from "./productService.js";

// form e inputs
const nameInput = document.getElementById("nombre");
const priceInput = document.getElementById("precio");
const stockInput = document.getElementById("stock");
const imageInput = document.getElementById("imagen");
const form = document.querySelector(".form-inventario");
// boton (acetar/actualizar)
const btnAdd = document.getElementById("btnAdd");
// lista
const list = document.getElementById("productsList");

let editId = null;

function renderProducts() {
    const productToRender = ProductService.list();

    list.innerHTML = productToRender
        .map((product) => product.toHTML()).join("");

    document.querySelectorAll(".btnDelete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            ProductService.delete(id);
            renderProducts();
        });
    });

    document.querySelectorAll(".btnEdit").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const product = ProductService.findById(id);
            nameInput.value = product.name;
            priceInput.value = product.price;
            stockInput.value = product.stock;
            imageInput.value = product.image;
            editId = id;
            btnAdd.textContent = "Actualizar";
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const file = imageInput.files[0]; // archivo seleccionado
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageURL = event.target.result; // esta es la URL base64

        const name = nameInput.value.trim();
        const price = Number(priceInput.value);
        const stock = Number(stockInput.value);

        if (!name || isNaN(price) || isNaN(stock)) {
            alert("Por favor completá todos los campos correctamente.");
            return;
        }

        if (editId === null) {
            ProductService.add(name, price, stock, imageURL);
        } else {
            ProductService.update(editId, name, price, stock, imageURL);
            editId = null;
            btnAdd.textContent = "Actualizar";
        }

        form.reset();
        renderProducts();
    }

    if (file) {
        reader.readAsDataURL(file); // convierte a base64
    } else {
        alert("Por favor seleccioná una imagen");
    }
});


renderProducts();