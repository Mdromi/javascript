/*====================
CP: 02 JavaScript Advance
00. call Method
CMD: [ node 02.Chapter-2/01.1.call.js ]
EX: 
===================*/

var myCustomObj = {
    name: 'Md Romi',
    age: 19,
    job: 'Student',
    anotherObj: {
        name: 'Romi MD',
        value: function(){
            console.log(`My name is: ` + this.name)
        }.call(myCustomObj)
    }
}
// myCustomObj.anotherObj.value() // return: this value rafer anotherObj
// myCustomObj.anotherObj.value.call(myCustomObj) // return: this value rafer myCustomObj

var karim = {
    name: 'Karim Ahmed',
    dob: 1996,
    age: function(currentYear){
        console.log(this.name + ` is ` + (currentYear - this.dob) + ` years old!`)
    }
}

var rahim = {
    name: 'Rahim Abdu',
    dob: 2006
}

karim.age.call(rahim, 2022)