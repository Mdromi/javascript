let a;

function async() {
    a = 20;
    var myFunc = () => {
        console.log(a);
    }
    setTimeout(myFunc, 3000);

    console.dir(myFunc);
}

async();

a = 30;