// * Arreglos con Tipos de Datos Primitivos:
// -1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.
let numeros = [1, 2, 3, 4, 5];
let suma = 0;

// > for tradicional
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// > reduce
let res = numeros.reduce((acum, num) => acum + num, 0);

console.log(`La suma es ${suma}`);
console.log(`La suma es ${res}`);

// -2. Promedio: Calcula el promedio de los números en un arreglo.
let promedio = suma / numeros.length;
console.log(`El promedio es ${promedio}`);

// -3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números.
let min = Math.min(...numeros); // spread recorre cada elemento del array
let max = Math.max(...numeros);

console.log(`Numero minimo: ${min}, Numero maximo: ${max}`);

// -4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe.
// > funcion
function posicion(x) {
    let pos = numeros.findIndex(numero => numero === x);

    if (pos === -1) {
        return console.log("No existe ese numero dentro del array");
    }
    return console.log(`La posicion del numero ${x} dentro del array es ${pos}`);
}

posicion(1);

// > indexOf
let indice = numeros.indexOf(1);

if (indice === -1) {
    console.log("No existe ese número dentro del array");
} else {
    console.log(`La posición del número 1 dentro del array es ${indice}`);
}

// -5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con números pares y otro con números impares.
let pares = numeros.filter(num => num % 2 === 0);
let impares = numeros.filter(num => num % 2 !== 0);

console.log(pares, impares);

// -6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
let numeros1 = [7, 7, 2, 1, 1, 10, 9];

let unicos = [...new Set(numeros1)];
console.log(unicos);

// -7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.
let ascendente = numeros1.sort((a, b) => a - b); //sort ordena string de forma alfabetica, por lo que a los numeros los convierte en strings. Para ello definimos una funcion de comparacion donde <0 -> a va antes que b, =0 -> se mantiene el mismo orden, >0 -> b va antes que a.
console.log(ascendente);

// -8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.
numeros1 = numeros1.filter(num => num !== 1);
console.log(numeros1);

// -9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.
let nums = [1,1,2,2,3,3];
let nums1 = [4,4,5,5,6,6,1,1];

let union = [...new Set([...nums,...nums1])];

console.log(union);

// * Arreglos con Tipos de Datos Compuestos:

// -10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.
const listaCompras = [
    {producto: 'manteca', cantidad: 1},
    {producto: 'leche entera', cantidad: 2},
    {producto: 'azucar', cantidad: 1},
    {producto: 'huevo', cantidad: 6}
]

console.log(listaCompras);

// -11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos.
const agenda = [
    {nombre: 'Camila', telefono: '11111', email: 'cami@gmail.com'},
    {nombre: 'Nicolas', telefono: '111222', email: 'nico@gmail.com'},
    {nombre: 'Chechu', telefono: '222333', email: 'chechu@gmail.com'}
]

console.log(agenda);

// -12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo.
const busqueda = [
    {parrafo: "hola hola mundo, como estas? estas, estas?", palabra: "hola"}
]
