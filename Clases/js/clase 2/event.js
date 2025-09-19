// let btn = document.getElementById("btnclick");

// btn.addEventListener("click", () => {
//     createList();
// })

// function createList() {
//     let frutas = ["Manzana", "Pera", "Naranja"];

// let lista = document.createElement("ul");
// frutas.forEach(fruta => {
//     let nuevo = document.createElement("li");
//     nuevo.innerHTML = fruta;
//     lista.appendChild(nuevo);
// });

// document.querySelector("#list").appendChild(lista);
// }

class Persona {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

function addPersona() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    return new Persona(nombre, email);
}

function addPersonaHtml() {
    let persona = addPersona();

    let ul = document.querySelector("#list ul");

    if(!ul) {
        ul = document.createElement("ul");
        document.querySelector("#list").appendChild(ul);
    }

    let li = document.createElement("li");
    li.id = persona.name;
    li.textContent = `La persona ${persona.name}, email: ${persona.email}`;

    let btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = function(){
        li.remove();
    }

    li.appendChild(btn);
    ul.appendChild(li);
}
