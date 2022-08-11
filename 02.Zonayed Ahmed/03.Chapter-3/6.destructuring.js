/*====================
CP: 03 JavaScript ES6
06.destructuring
CMD: [ node 03.Chapter-3/6.destructuring.js ]
EX: 
===================*/
const mdromi = [`md romi`, 22, `Student`];
const[name6, age6, profession6] = mdromi;
// console.log(name6);
// console.log(age6);
// console.log(profession6);

const mdromiObj = {
    nameObj: `Md Romi`,
    ageObj: 21,
    professionObj: `Students`
}
const {nameObj, ageObj, professionObj} = mdromiObj;
// console.log(nameObj);
// console.log(ageObj);
// console.log(professionObj);


const {nameObj:nameObj6, ageObj:ageObj6, professionObj:professionObj6} = mdromiObj;
// console.log(nameObj6);
// console.log(ageObj6);
// console.log(professionObj6);

var comObj = {
    anotherObj: {
        anotherNewObj: {
            title: `JavaScript ES6`
        }
    }
}
const {anotherObj: {anotherNewObj: {title} }} = comObj;
console.log(title);

const {anotherObj: {anotherNewObj: {title:newtitle} }} = comObj;
console.log(newtitle)