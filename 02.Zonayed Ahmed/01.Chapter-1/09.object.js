/*====================
09. Object
CMD: [ node 01.Chapter-1/09.object.js ]
EX: 
===================*/

var obj = new Object()

var rahim = {
    fullName : `Rahim Mia`,
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder',
    welcomeMsg:  function(){
        console.log('Hello There')
    }
}
console.log(rahim)

// console.log(rahim.fullName) // dot notation
// console.log(rahim['fullName']) // brakets notation

rahim.zipCode = 3517
// console.log(rahim.zipCode)

rahim.job = 'Student' 
// console.log(rahim.job)

rahim.welcomeMsg2 = function(){
    console.log('Hello There')
}

// rahim.welcomeMsg()
// rahim.welcomeMsg2()

for(item in rahim){
    //console.log(item)
}

// Object Array
var objArr = {
    normal: `Normal Item`,
    name: ['Rahim', 'Karim', 'Rafiq', 'Jabbar'],
    age: [10, 20, 30, 40, 50]
}
// console.log(objArr)
console.log('Name: '+ objArr.name[2] + ', Age: ' + objArr.age[2])

//Array Object
var arrObj = [
    `Md Romi`,
    {
        name: `Rafiq`,
        age: 21,
        job: `Student`
    },
    `Bangladesh`
]
console.log(arrObj)
console.log(arrObj[1].name)
