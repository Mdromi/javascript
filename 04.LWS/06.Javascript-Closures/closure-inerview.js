for(var i = 0; i < 3; i++){
    const myFunc = () => {
        console.log(i)
    }
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 3000)
}
console.log(i);