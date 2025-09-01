const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
    texto.classList.toggle("oculto");
    texto.classList.toggle("visible");
});