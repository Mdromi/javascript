/*====================
11. Introduction to OOP
CMD: [ node 011.Chapter_eleven/01.introductionOOP.js]
SUB: Introduction to OOP
EX: 
===================*/

var rect = {
    width: 10,
    height: 20,

    calculateArea: function(){
        return this.width * this.height
    },
    calculateRange: function(){
        return 2 * (this.width + this.height)
    }
}

var area = rect.calculateArea();
var range = rect.calculateRange();

console.log(area, range);