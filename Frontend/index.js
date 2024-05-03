function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`hi i am ${this.name}`);
}