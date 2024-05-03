// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`hi i am ${this.name}`);
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`hi i am ${this.name}`);
//     }
// }

// let p1 = new Person ("Gillims", 69);
// let p2 = new Person ("Bloom", 12);

class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk() {
        console.log(`Hi! i am ${this.name}`);
    }
}