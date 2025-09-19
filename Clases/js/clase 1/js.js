// * Mensaje que se muestra por consola (desde devtools)
console.log("Hola Mundo desde un archivo externo");

// * Variables
let nombre = "Juan";
let edad = 30;
console.log("Nombre:", nombre);
console.log("Edad:", edad);

// if (confirm("¿Quieres ver una alerta?")) {
//     alert("¡Hola " + nombre + "! Tienes " + edad + " años.");
// }

// * Funciones
function ejemploVarLet() {
    if (true) {
        var x = 10; // var tiene alcance de función
        let y = 20; // let tiene alcance de bloque
        console.log(y); // Funciona
    }
    console.log(x); // Funciona
    // console.log(y) // Error: y no está definido
}

ejemploVarLet();

let num = 20;
let num2 = "20";
console.log(num == num2); // true (comparación de valor, contenido)
console.log(num === num2); // false (comparación de valor y tipo)

// * Estructuras de control
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
        break;
}

for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
}

let i = 0;

while (i < 5) {
    console.log("While Iteración:", i);
    i++;
}

// * Arreglos
let frutas = ["Manzana", "Banana", true, 10];

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

// * Funcion declarativa
console.log(sumar(5, 3)); // Funciona
function sumar(a, b) {
    return a + b;
}

// * Funcion anonima
const restar = function (a, b) {
    return a - b;
}

console.log(restar(5, 3)); // Funciona

// * Funcion flecha
const sumarFlecha = (a, b) => a + b; // Funcion flecha
console.log(sumarFlecha(10, 5));


// * Probando
const verduras = ["Lechuga", "Tomate", "Zanahoria"];
console.log(verduras)

// * Objetos
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};
console.log(persona.nombre); // Ana
console.log(persona["edad"]); // 25

persona.profesion = "Ingeniera"; // Añadir nueva propiedad
console.log(persona);

// * Funciones constructoras
function Persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
}
const juan = new Persona("Juan", 30, "Barcelona");
console.log(juan);
juan.saludar(); // Hola, soy Juan y tengo 30 años.

// * Clases 
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}