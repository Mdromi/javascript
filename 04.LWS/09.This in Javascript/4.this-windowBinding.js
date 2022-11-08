var PrintName = function () {
    console.log(this.name); // undefined
}

var sakib = {
    name: 'sakib',
}

PrintName();