// console.log(document.getElementById("titulo"));

let h2 = document.getElementById("titulo");
console.log(h2);

let elements = document.getElementsByClassName("tituloSecundario");
console.log(elements);


let parrafo = document.querySelector(".tituloSecundario");
console.log(parrafo);
parrafo.innerHTML = "Hola mundo";
parrafo.style.color = "red";


let frutas = ["Manzana", "Pera", "Naranja"];

let lista = document.createElement("ul");
frutas.forEach(fruta => {
    let nuevo = document.createElement("li");
    nuevo.innerHTML = fruta;
    lista.appendChild(nuevo);
});

document.querySelector("#list").appendChild(lista);
