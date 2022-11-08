function Person(name, age){
    // let this = Object.create();
    this.name = name;
    this.age = age;

    return this;
}

Person.prototype = {
    eat(){
        console.log(`Person is eating`);
    },
    sleap(){
        console.log(`Person is sleaping`);
    },
    play(){
        console.log(`Person is playing`);
    },
};

const sakib = new Person(`Sakib`, 35);
sakib.play();
const tamim = new Person(`Tamim`, 35);