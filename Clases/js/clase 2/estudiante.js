class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this._carrera = carrera;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

const maria = new Estudiante('María', 22, 'TUP');

maria.saludar();
maria.estudiar();