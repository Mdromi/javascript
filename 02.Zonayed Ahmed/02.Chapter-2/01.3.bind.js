/*====================
CP: 02 JavaScript Advance
00. bind Method
CMD: [ node 02.Chapter-2/01.3.bind.js ]
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
var anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj) // return: this value rafer myCustomObj
anotherFunc()

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

var ragimAge = karim.age.bind(rahim, 2022)
ragimAge('Hello World!')

var rahimAgeCalculate = karim.age.bind(rahim)
rahimAgeCalculate(2018, `Hello Dolly!`)