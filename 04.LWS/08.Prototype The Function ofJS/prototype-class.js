class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`Person is eating`);
    }
    sleap(){
        console.log(`Person is sleaping`);
    }
    play(){
        console.log(`Person is playing`);
    }
}

const sakib = new Person(`Sakib`, 35);
sakib.play();
const tamim = new Person(`Tamim`, 35);