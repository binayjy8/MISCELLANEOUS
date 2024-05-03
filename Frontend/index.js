// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`hi i am ${this.name}`);
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`hi i am ${this.name}`);
    }
}

let p1 = new Person ("Gillims", 69);