/*====================
13. Prototype
CMD: [ node 013.Chapter_thirteen/01.PrototypePrototypical.js]
SUB: Prototype and Prototypical                                
EX: 
===================*/

var obj = {}
var obj2 = new Object()

obj.__proto__ == obj2.__proto__ // return true
Object.getPrototypeOf(obj);
Object.getPrototypeOf(obj) == Object.getPrototypeOf(obj2)