import { ProductService } from "./productService.js";

const btnAdd = document.getElementById("btnAdd");
const nameInput = document.getElementById("nombre");
const priceInput = Number(document.getElementById("precio"));
const stockInput = Number(document.getElementById("stock"));
const imageInput = document.getElementById("imagen");

let editId = null;

function renderProducts() {
    const productToRender = ProductService.list();

    list.innerHTML = productToRender
        .map((product, id) => product.toHTML(id)).join("");

    document.querySelectorAll(".btnDelete").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            ProductService.delete(id);
            renderProducts();
        });
    });

    document.querySelectorAll(".btnEdit").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const product = ProductService.list()(id);
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

    const name = nameInput.value;
    const price = priceInput.value;
    const stock = stockInput.value;
    const image = image.value;

    if (editId === null) {
        ProductService.add(name, price, stock, image);
    } else {
        ProductService.update(editId, name, price, stock, image);
        editId = null;
        btnAdd.textContent = "Agregar";
    }

    form.reset();
})

renderProducts();