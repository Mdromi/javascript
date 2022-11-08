/**
 *  1. Implicit Binding -> 1st এ দেখবে function কোথায় call হয়েছে, যে য়াইগায় call হয়েছে তার আগে কি ডট নোটেশন 
 *  আছে নাকি? যদি থাকে  তাহলে সেটাকে Denote করবে this কে। তারপর দেখবে this এর value আছে নাকি? যদি থাকে  তাহলে 
 * সেটাকে print করবে। 
 * */ 
// 1st
var sakib = {
    name: 'sakib',
    age: 35,
    printPlayerName: function () {
        console.log(this.name);
    }
}
// sakib.printPlayerName();

// 2nd
var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function () {
        console.log(this.name);
    }
}

var rahim = {
    name: 'Rahim',
    age: 35,
}

var kabir = {
    name: 'Kabir',
    age: 35,
}

printPlayerNameFunction(rahim);
printPlayerNameFunction(kabir);

// console.table(rahim)

// rahim.printPlayerName();
// kabir.printPlayerName();


// 3rd exmple
var Person = function (name, age){
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        father: {
            name: 'Mr. xxx',
            printName: function () {
                console.log(this.name);
            },
        },
    };
};

var fahim = Person(`Fahim`, 35);
fahim.printName(); // Fahim
fahim.father.printName(); // Mr. xxx