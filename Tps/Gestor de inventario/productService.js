import { Product } from "./product.js"

let products = [];

export const ProductService = {
    list: () => {
        const productsItem = localStorage.getItem("products");
        if (productsItem) {
            let productsPlain = JSON.parse(productsItem);
            products = productsPlain.map(p => {
                const prod = new Product(p.name, p.price, p.stock, p.image);
                prod.id = p.id; // conservar el id original
                return prod;
            });
        }
        return products;
    },
    add: (name, price, stock, image) => {
        const product = new Product(name, price, stock, image);
        products.push(product);
        saveToLocalStorage();
    },
    delete: (productId) => {
        const product = ProductService.findById(productId);
        const index = products.indexOf(product);

        if (index !== -1) {
            products.splice(index, 1);
            saveToLocalStorage();
        }

    },
    update: (productId, newName, newPrice, newStock, newImage) => {
        const product = ProductService.findById(productId);

        if (product) {
            product.name = newName;
            product.price = newPrice;
            product.stock = newStock;
            product.image = newImage;
            saveToLocalStorage();
        }
    },
    findById: (productId) => {
        const product = products.find(p => p.id === Number(productId));
        return product;
    }
}

const saveToLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(products));
}