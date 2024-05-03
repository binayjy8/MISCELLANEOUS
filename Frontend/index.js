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

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi! i am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}


class Teacher extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}


s1 = new Student ("ev", 23, 98);