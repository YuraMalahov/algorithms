"use strict";


class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // геттер
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // сеттер
    set fullName(newValue) {
        this.firstName = newValue.split(' ')[0];
        this.lastName = newValue.split(' ')[1];
    }
    // вычисляемое название метода
    ["test".toUpperCase()]() {
        console.log("PASSED!");
    }

    static createGuest() {
        return new User("Гость", "Сайта");
    }
}

let user = new User("Вася", "Пупков");
console.log( user.fullName ); // Вася Пупков
user.fullName = "Иван Петров";
console.log( user.fullName ); // Иван Петров
user.TEST(); // PASSED!

console.log(User.createGuest().fullName);