import { UserService } from "./userservice.js";

const btnAdd = document.getElementById("btnAdd");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const list = document.getElementById("userList");

let editIndex = null;

function render() {

    const userToRender = UserService.list();

    list.innerHTML = userToRender
        .map((user, index) => user.toHTML(index)).join("")

    document.querySelectorAll(".btnDelete").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            UserService.delete(index);
            render();
        });
    });

    document.querySelectorAll(".btnEdit").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            const user = UserService.list()[index];
            nameInput.value = user.name;
            emailInput.value = user.email;
            editIndex = index;
            btnAdd.textContent = "Actualizar";
        });
    });
}

btnAdd.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) return alert("Completá todos los campos.")

    if (editIndex === null) {
        UserService.add(name, email)
    } else {
        UserService.update(editIndex, name, email)
        editIndex = null;
        btnAdd.textContent = "Agregar";
    }

    nameInput.value = ""
    emailInput.value = ""

    render();
});

render();