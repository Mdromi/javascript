/*====================
CP: 02 JavaScript Advance
00. apply Method
CMD: [ node 02.Chapter-2/01.2.apply.js ]
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
        }
    }
}
myCustomObj.anotherObj.value.apply(myCustomObj) // return: this value rafer myCustomObj

var karim = {
    name: 'Karim Ahmed',
    dob: 1996,
    age: function(currentYear, msg){
        console.log(msg + ` ` + this.name + ` is ` + (currentYear - this.dob) + ` years old!`)
    }
}

var rahim = {
    name: 'Rahim Abdu',
    dob: 2006
}

karim.age(2018, `Hello World!`)
karim.age.apply(rahim, [2018, `Hello World!`])