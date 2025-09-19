class Persona {

    #email; // Atributo privado

    constructor(nombre, edad, email) {
        this._nombre = nombre;
        this._edad = edad;
        this.#email = email;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get email() {
        return this.#email;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }

}

const juan = new Persona('Juan', 30, 'juan@email.com');
juan.email;
console.log(juan.email); // Accediendo al atributo privado a través del getter