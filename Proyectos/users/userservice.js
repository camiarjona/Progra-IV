import { User } from "./user.js"

let users = [];

export const UserService = {
    add: (name, email) => {
        const user = new User(name, email);
        users.push(user);
        // - local storage
        // let usersJson = JSON.stringify(users);
        // * "users" -> nombre con el que se guarda la variable en el localstorage
        // localStorage.setItem("users", usersJson);
        saveToLocalStorage();
    },
    list: () => {
        const usersItem = localStorage.getItem("users");
        if (usersItem) {
            let usersPlain = JSON.parse(usersItem);
            users = usersPlain.map(user => new User(user.name, user.email));
        }

        return users;
    },
    delete: (index) => {
        users.splice(index, 1);
        saveToLocalStorage();

    },
    update: (index, name, email) => {
        if (users[index]) {
            users[index].name = name;
            users[index].email = email;
            saveToLocalStorage();
        }

    }
}

const saveToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users));
}