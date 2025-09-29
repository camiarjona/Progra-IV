export class Product {
    constructor(name, price, stock, image) {
        this.id = Date.now();
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }

    toHTML() {
        return `
            <li>
                <div class="img-card"><img src="${this.image}" alt="${this.name}"></div>
                <div class="data-card"> 
                    <h3>${this.name}</h3> 
                    <p>Precio: ${this.price}</p>
                </div>
                <div class="stock-card">Stock: ${this.stock}</div>
                <div class="btncard">
                    <button data-id="${this.id}" class="btnEdit">📝</button>
                    <button data-id="${this.id}" class="btnDelete">🗑️</button>
                </div>
            </li>`
    }
}