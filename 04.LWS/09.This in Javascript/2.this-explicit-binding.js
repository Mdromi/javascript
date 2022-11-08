var printName =  function () {
    console.log(`${this.name} is ${v1} and ${v2}`);
}
var sakib = {
    name: 'sakib',
    age: 35,
}

var v1 = 'Handsome';
var v2 = 'all rounder';

var v = [v1, v2]

printName.call(sakib, v1, v2);
printName.apply(sakib, v);

var newFunc = printName.bind(sakib, v1, v2);
newFunc();