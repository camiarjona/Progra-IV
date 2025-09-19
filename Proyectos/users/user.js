export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toHTML(index) {
        return `
            <li>
            ${this.name} -  ${this.email}
                <button data-index="${index}" class="btnEdit">Editar</button>
                <button data-index="${index}" class="btnDelete">Eliminar</button>
            </li>`
    }
}
