function Person(name, age) {
    this.name = name;
    this.age = age;

    console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person('Sakib', 32)