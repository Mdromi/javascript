/*====================
CP: 02 JavaScript Advance
04. Inheritance
CMD: [ node 02.Chapter-2/4.inheritance.js ]
EX: 
===================*/

var PersonOnly = function(nameArg, ageArg, jobAg){
    this.name = nameArg;
    this.age = ageArg;
    this.job = jobAg;
}

PersonOnly.prototype.dateOfBirth = function(){
    console.log(this.name + ` is born in ` + (2022 - this.age));
}

// console.log(PersonOnly.prototype)

var zawad = new PersonOnly(`Zawad Ahmed`, 1, `Child`)
// console.log(zawad.dateOfBirth())
// console.log(zawad)

PersonOnly.prototype.address = `Bangladesh`;
// console.log(zawad.address)

var Person = function(nameArg, ageArg, jobAg){
    this.name = nameArg;
    this.age = ageArg;
    this.job = jobAg;
}

var Teacher = function(name, age, job, subject){
    Person.call(this, name, age, job);
    this.subject = subject;
}

var kamaljeet = new Teacher(`Kamaljeet Sani`, 53, `Teacher`, `CSE`);

console.log(kamaljeet.name)
console.log(kamaljeet.subject.age)
console.log(kamaljeet.job)
console.log(kamaljeet.subject)
