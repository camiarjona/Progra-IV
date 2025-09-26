export class Product {
    constructor(name, price, stock, image) {
        this.id = Date.now();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }

    toHTML(id) {
        return `
            <li>
                <div class="img-card">${this.image}</div>
                <div class="data-card">${this.name} - ${this.price}</div>
                <div class="stock-card">${this.stock}</div>
                <div class="btncard">
                    <button data-id="${this.id}" class="btnEdit">📝</button>
                    <button data-id="${this.id}" class="btnDelete">🗑️</button>
                </div>
            </li>`
    }
}