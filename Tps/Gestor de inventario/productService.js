import { Product } from "./product.js"

const products = [];

export const ProductService = {
    list: () => {
        const productsItem = localStorage.getItem("products");
        if (productsItem) {
            let productsPlain = JSON.parse(productsItem);
            products = productsPlain.map(p => new Product(p.name, p.price, p.stock, p.image));
        }
    },
    add: (name, price, stock, image) => {
        const product = new Product(name, price, stock, image);
        products.push(product);
        saveToLocalStorage();
    },
    delete: (productId) => {
        const product = findById(productId);
        const index = products.indexOf(product);
        products.splice(index, 1);
        saveToLocalStorage();
    },
    update: (productId, newName, newPrice, newStock, newImage) => {
        const product = findById(productId);

        if (product) {
            product.name = newName;
            product.price = newPrice;
            product.stock = newStock;
            product.image = newImage;
            saveToLocalStorage();
        }
    },
    findById: (productId) => {
        const product = products.find(p => p.id === productId);
        return product;
    }
}

const saveToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users));
}