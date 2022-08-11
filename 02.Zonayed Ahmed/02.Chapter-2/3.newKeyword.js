/*====================
CP: 02 JavaScript Advance
03. New Keyword
CMD: [ node 02.Chapter-2/3.newKeyword.js ]
EX: 
===================*/

var Person = function(nameArg, ageArg, jobAg){
    this.name = nameArg;
    this.age = ageArg;
    this.job = jobAg;
}

var samir  = new Person('Samir hossain', 22, `Student`)
// console.log(samir)

// console.log(samir.name);
// console.log(samir.age);
// console.log(samir.job)

var kinan = new Person('Kinan hossain', 29, `Businessman`);
var jamil = new Person('Jamil hossain', 18, `Driver`);
var jamil = new Person('Jamil hossain', 1, `Child`);
var zonayed = new Person('Zonayed Ahmed', 21, `Developer`);


var Personwitmethod = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function(){
        console.log(this.name + ` is born in ` + (2022 - this.age));
    }
}

var samirwithmethod = new Personwitmethod('Samir hossain', 22, `Student`);
 
console.log(samirwithmethod)
// samirwithmethod.dateOfBirth();

var anotherObj = new Personwitmethod(`Zonayed Ahmed`, 3, `child`)
console.log(anotherObj)