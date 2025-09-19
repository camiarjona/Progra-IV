export class Person {
    constructor(name){
        this._name = name;
    }
}

export function showPerson(person) {
    console.log(person._name);
}