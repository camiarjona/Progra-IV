import { User } from "./user.js"

const users = [];

export const UserService = {
    add: (name, email) => {
        const user = new User(name, email);
        users.push(user);
    },
    list: () => users,
    delete: (index) => {
        users.splice(index, 1);
    },
    update: (index, name, email) => {
        users[index].name = name;
        users[index].email = email;
    }
}